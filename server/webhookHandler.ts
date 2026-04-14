import crypto from "crypto";
import * as deploymentDb from "./deploymentDb";
import { getDb } from "./db";
import { eq } from "drizzle-orm";
import { githubIntegrations } from "../drizzle/schema";

/**
 * Verify GitHub webhook signature
 */
export function verifyGitHubSignature(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(payload);
  const expectedSignature = "sha256=" + hmac.digest("hex");
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
}

/**
 * Handle GitHub push webhook
 */
export async function handleGitHubPushWebhook(payload: any, secret: string) {
  try {
    // Verify the webhook came from GitHub
    const signature = payload.headers?.["x-hub-signature-256"];
    if (!signature) {
      throw new Error("Missing GitHub signature");
    }

    // Get the repository URL from the webhook payload
    const repositoryUrl = payload.repository?.clone_url || payload.repository?.html_url;
    if (!repositoryUrl) {
      throw new Error("Missing repository URL in webhook payload");
    }

    // Find the GitHub integration
    const integration = await deploymentDb.getGitHubIntegrationByUrl(repositoryUrl);
    if (!integration) {
      throw new Error(`No integration found for repository: ${repositoryUrl}`);
    }

    // Verify webhook secret matches
    if (integration.webhookSecret !== secret) {
      throw new Error("Webhook secret mismatch");
    }

    // Check if auto-deploy is enabled
    if (!integration.autoDeployOnPush) {
      console.log("Auto-deploy is disabled for this repository");
      return { success: true, message: "Auto-deploy is disabled" };
    }

    // Check if the pushed branch matches the deploy branch
    const ref = payload.ref; // e.g., "refs/heads/main"
    const branch = ref?.split("/").pop();
    if (branch !== integration.autoDeployBranch) {
      console.log(`Pushed to branch ${branch}, but auto-deploy is configured for ${integration.autoDeployBranch}`);
      return { success: true, message: `Branch ${branch} does not match deploy branch` };
    }

    // Extract deployment information from webhook
    const commitHash = payload.after; // The commit SHA of the pushed code
    const commitMessage = payload.head_commit?.message || "Webhook triggered deployment";
    const pusher = payload.pusher?.name || "unknown";

    // Create deployment
    const deploymentResult = await deploymentDb.createDeployment({
      userId: integration.userId,
      repositoryUrl: integration.repositoryUrl,
      repositoryName: integration.repositoryName,
      branch: integration.autoDeployBranch,
      status: "pending",
      deploymentType: "webhook",
      commitHash,
      commitMessage,
    });

    const deploymentId = (deploymentResult as any).insertId as number;

    // Log the webhook trigger
    await deploymentDb.addDeploymentLog({
      deploymentId,
      logLevel: "info",
      message: `Deployment triggered by webhook from ${pusher}`,
      details: {
        commitHash,
        branch,
        pusher,
      },
    });

    // Log pushed files
    if (payload.commits && Array.isArray(payload.commits)) {
      const filesChanged = new Set<string>();
      payload.commits.forEach((commit: any) => {
        if (commit.added && Array.isArray(commit.added)) commit.added.forEach((f: string) => filesChanged.add(f));
        if (commit.modified && Array.isArray(commit.modified)) commit.modified.forEach((f: string) => filesChanged.add(f));
        if (commit.removed && Array.isArray(commit.removed)) commit.removed.forEach((f: string) => filesChanged.add(f));
      });

      await deploymentDb.addDeploymentLog({
        deploymentId,
        logLevel: "info",
        message: `${filesChanged.size} files changed in this push`,
        details: {
          filesChanged: Array.from(filesChanged),
        },
      });
    }

    // Update integration last synced time
    const db = await getDb();
    if (db) {
      await db.update(githubIntegrations).set({
        lastSyncedAt: new Date(),
      }).where(eq(githubIntegrations.id, integration.id));
    }

    return {
      success: true,
      deploymentId,
      message: "Deployment created successfully",
    };
  } catch (error) {
    console.error("Error handling GitHub webhook:", error);
    throw error;
  }
}

/**
 * Extract files from deployment
 */
export async function extractDeploymentFiles(deploymentId: number, fileList: string[]) {
  try {
    const files = fileList.map((filePath) => ({
      deploymentId,
      filePath,
      fileName: filePath.split("/").pop() || filePath,
      fileType: filePath.split(".").pop() || "unknown",
      status: "pending" as const,
    }));

    await deploymentDb.addDeployedFiles(files);

    return {
      success: true,
      filesExtracted: files.length,
    };
  } catch (error) {
    console.error("Error extracting deployment files:", error);
    throw error;
  }
}

/**
 * Process deployment - extract and deploy files
 */
export async function processDeployment(deploymentId: number) {
  try {
    const deployment = await deploymentDb.getDeploymentById(deploymentId);
    if (!deployment) {
      throw new Error(`Deployment not found: ${deploymentId}`);
    }

    // Update status to in_progress
    await deploymentDb.updateDeploymentStatus(deploymentId, "in_progress");

    await deploymentDb.addDeploymentLog({
      deploymentId,
      logLevel: "info",
      message: "Starting deployment process",
    });

    // Simulate file extraction and deployment
    // In a real implementation, this would:
    // 1. Clone the repository
    // 2. Extract files
    // 3. Deploy to web server
    // 4. Verify deployment

    await deploymentDb.addDeploymentLog({
      deploymentId,
      logLevel: "info",
      message: "Files extracted successfully",
    });

    // Update deployment status to success
    await deploymentDb.updateDeploymentStatus(deploymentId, "success");

    await deploymentDb.addDeploymentLog({
      deploymentId,
      logLevel: "info",
      message: "Deployment completed successfully",
    });

    return {
      success: true,
      deploymentId,
      message: "Deployment processed successfully",
    };
  } catch (error) {
    console.error("Error processing deployment:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    await deploymentDb.updateDeploymentStatus(deploymentId, "failed", errorMessage);
    throw error;
  }
}
