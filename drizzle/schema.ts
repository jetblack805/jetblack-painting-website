import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, json } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Deployment tracking table for managing website deployments
 */
export const deployments = mysqlTable("deployments", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  repositoryUrl: varchar("repositoryUrl", { length: 512 }).notNull(),
  repositoryName: varchar("repositoryName", { length: 255 }).notNull(),
  branch: varchar("branch", { length: 255 }).default("main").notNull(),
  status: mysqlEnum("status", ["pending", "in_progress", "success", "failed", "cancelled"]).default("pending").notNull(),
  deploymentType: mysqlEnum("deploymentType", ["manual", "webhook", "scheduled"]).default("manual").notNull(),
  commitHash: varchar("commitHash", { length: 64 }),
  commitMessage: text("commitMessage"),
  deployedAt: timestamp("deployedAt"),
  completedAt: timestamp("completedAt"),
  errorMessage: text("errorMessage"),
  filesDeployed: int("filesDeployed").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Deployment = typeof deployments.$inferSelect;
export type InsertDeployment = typeof deployments.$inferInsert;

/**
 * File tracking table for managing deployed files
 */
export const deployedFiles = mysqlTable("deployedFiles", {
  id: int("id").autoincrement().primaryKey(),
  deploymentId: int("deploymentId").notNull(),
  filePath: varchar("filePath", { length: 512 }).notNull(),
  fileName: varchar("fileName", { length: 255 }).notNull(),
  fileSize: int("fileSize"),
  fileType: varchar("fileType", { length: 50 }),
  status: mysqlEnum("status", ["pending", "deployed", "failed", "skipped"]).default("pending").notNull(),
  checksum: varchar("checksum", { length: 64 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type DeployedFile = typeof deployedFiles.$inferSelect;
export type InsertDeployedFile = typeof deployedFiles.$inferInsert;

/**
 * GitHub integration configuration table
 */
export const githubIntegrations = mysqlTable("githubIntegrations", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  repositoryUrl: varchar("repositoryUrl", { length: 512 }).notNull(),
  repositoryName: varchar("repositoryName", { length: 255 }).notNull(),
  repositoryOwner: varchar("repositoryOwner", { length: 255 }).notNull(),
  webhookUrl: varchar("webhookUrl", { length: 512 }),
  webhookSecret: varchar("webhookSecret", { length: 255 }),
  isActive: boolean("isActive").default(true).notNull(),
  lastSyncedAt: timestamp("lastSyncedAt"),
  autoDeployOnPush: boolean("autoDeployOnPush").default(false).notNull(),
  autoDeployBranch: varchar("autoDeployBranch", { length: 255 }).default("main"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type GitHubIntegration = typeof githubIntegrations.$inferSelect;
export type InsertGitHubIntegration = typeof githubIntegrations.$inferInsert;

/**
 * Deployment history and logs
 */
export const deploymentLogs = mysqlTable("deploymentLogs", {
  id: int("id").autoincrement().primaryKey(),
  deploymentId: int("deploymentId").notNull(),
  logLevel: mysqlEnum("logLevel", ["info", "warning", "error", "debug"]).default("info").notNull(),
  message: text("message").notNull(),
  details: json("details"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type DeploymentLog = typeof deploymentLogs.$inferSelect;
export type InsertDeploymentLog = typeof deploymentLogs.$inferInsert;

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  deployments: many(deployments),
  githubIntegrations: many(githubIntegrations),
}));

export const deploymentsRelations = relations(deployments, ({ one, many }) => ({
  user: one(users, {
    fields: [deployments.userId],
    references: [users.id],
  }),
  files: many(deployedFiles),
  logs: many(deploymentLogs),
}));

export const deployedFilesRelations = relations(deployedFiles, ({ one }) => ({
  deployment: one(deployments, {
    fields: [deployedFiles.deploymentId],
    references: [deployments.id],
  }),
}));

export const deploymentLogsRelations = relations(deploymentLogs, ({ one }) => ({
  deployment: one(deployments, {
    fields: [deploymentLogs.deploymentId],
    references: [deployments.id],
  }),
}));

export const githubIntegrationsRelations = relations(githubIntegrations, ({ one }) => ({
  user: one(users, {
    fields: [githubIntegrations.userId],
    references: [users.id],
  }),
}));
