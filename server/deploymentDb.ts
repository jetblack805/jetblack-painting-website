import { eq, desc } from "drizzle-orm";
import { deployments, deployedFiles, githubIntegrations, deploymentLogs, InsertDeployment, InsertDeployedFile, InsertGitHubIntegration, InsertDeploymentLog } from "../drizzle/schema";
import { getDb } from "./db";

/**
 * Create a new deployment record
 */
export async function createDeployment(deployment: InsertDeployment) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(deployments).values(deployment);
  return result;
}

/**
 * Get deployment by ID with related files and logs
 */
export async function getDeploymentById(deploymentId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const deployment = await (db.query as any).deployments.findFirst({
    where: eq(deployments.id, deploymentId),
    with: {
      files: true,
      logs: true,
    },
  });

  return deployment;
}

/**
 * Get all deployments for a user with pagination
 */
export async function getUserDeployments(userId: number, limit = 20, offset = 0) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const userDeployments = await (db.query as any).deployments.findMany({
    where: eq(deployments.userId, userId),
    orderBy: desc(deployments.createdAt),
    limit,
    offset,
    with: {
      files: true,
      logs: true,
    },
  });

  return userDeployments;
}

/**
 * Update deployment status
 */
export async function updateDeploymentStatus(deploymentId: number, status: string, errorMessage?: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const updateData: any = {
    status,
    updatedAt: new Date(),
  };

  if (status === "success" || status === "failed") {
    updateData.completedAt = new Date();
  }

  if (errorMessage) {
    updateData.errorMessage = errorMessage;
  }

  await db.update(deployments).set(updateData).where(eq(deployments.id, deploymentId));
}

/**
 * Add deployed files to a deployment
 */
export async function addDeployedFiles(files: InsertDeployedFile[]) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  if (files.length === 0) return;
  await db.insert(deployedFiles).values(files);
}

/**
 * Add deployment log entry
 */
export async function addDeploymentLog(log: InsertDeploymentLog) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.insert(deploymentLogs).values(log);
}

/**
 * Get or create GitHub integration
 */
export async function getOrCreateGitHubIntegration(userId: number, repoUrl: string, repoName: string, repoOwner: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const existing = await (db.query as any).githubIntegrations.findFirst({
    where: eq(githubIntegrations.repositoryUrl, repoUrl),
  });

  if (existing) {
    return existing;
  }

  const integration: InsertGitHubIntegration = {
    userId,
    repositoryUrl: repoUrl,
    repositoryName: repoName,
    repositoryOwner: repoOwner,
    isActive: true,
  };

  const result = await db.insert(githubIntegrations).values(integration);
  return { ...integration, id: (result as any).insertId };
}

/**
 * Get GitHub integration by repository URL
 */
export async function getGitHubIntegrationByUrl(repoUrl: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const integration = await (db.query as any).githubIntegrations.findFirst({
    where: eq(githubIntegrations.repositoryUrl, repoUrl),
  });

  return integration;
}

/**
 * Update GitHub integration webhook settings
 */
export async function updateGitHubIntegrationWebhook(integrationId: number, webhookUrl: string, webhookSecret: string, autoDeployOnPush: boolean, autoDeployBranch: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(githubIntegrations).set({
    webhookUrl,
    webhookSecret,
    autoDeployOnPush,
    autoDeployBranch,
    updatedAt: new Date(),
  }).where(eq(githubIntegrations.id, integrationId));
}

/**
 * Get user's GitHub integrations
 */
export async function getUserGitHubIntegrations(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const integrations = await (db.query as any).githubIntegrations.findMany({
    where: eq(githubIntegrations.userId, userId),
  });

  return integrations;
}

/**
 * Get deployment statistics for a user
 */
export async function getDeploymentStats(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const allDeployments = await (db.query as any).deployments.findMany({
    where: eq(deployments.userId, userId),
  });

  const stats = {
    total: allDeployments.length,
    successful: allDeployments.filter((d: any) => d.status === "success").length,
    failed: allDeployments.filter((d: any) => d.status === "failed").length,
    inProgress: allDeployments.filter((d: any) => d.status === "in_progress").length,
    lastDeployment: allDeployments.length > 0 ? allDeployments[0]?.createdAt : null,
  };

  return stats;
}
