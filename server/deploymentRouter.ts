import { z } from "zod";
import { protectedProcedure, router } from "./_core/trpc";
import * as deploymentDb from "./deploymentDb";
import { TRPCError } from "@trpc/server";

export const deploymentRouter = router({
  /**
   * Get all deployments for the current user
   */
  listDeployments: protectedProcedure
    .input(z.object({
      limit: z.number().min(1).max(100).default(20),
      offset: z.number().min(0).default(0),
    }))
    .query(async ({ ctx, input }) => {
      try {
        const deploymentsList = await deploymentDb.getUserDeployments(ctx.user.id, input.limit, input.offset);
        return deploymentsList;
      } catch (error) {
        console.error("Error listing deployments:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to list deployments",
        });
      }
    }),

  /**
   * Get deployment details by ID
   */
  getDeployment: protectedProcedure
    .input(z.object({ deploymentId: z.number() }))
    .query(async ({ ctx, input }) => {
      try {
        const deployment = await deploymentDb.getDeploymentById(input.deploymentId);
        
        if (!deployment || deployment.userId !== ctx.user.id) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Deployment not found",
          });
        }

        return deployment;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("Error getting deployment:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to get deployment",
        });
      }
    }),

  /**
   * Create a new manual deployment
   */
  createDeployment: protectedProcedure
    .input(z.object({
      repositoryUrl: z.string().url(),
      repositoryName: z.string(),
      branch: z.string().default("main"),
      commitHash: z.string().optional(),
      commitMessage: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await deploymentDb.createDeployment({
          userId: ctx.user.id,
          repositoryUrl: input.repositoryUrl,
          repositoryName: input.repositoryName,
          branch: input.branch,
          status: "pending",
          deploymentType: "manual",
          commitHash: input.commitHash,
          commitMessage: input.commitMessage,
        });

        // Log deployment creation
        const deploymentId = (result as any).insertId as number;
        await deploymentDb.addDeploymentLog({
          deploymentId,
          logLevel: "info",
          message: `Deployment created for ${input.repositoryName} on branch ${input.branch}`,
        });

        return { deploymentId, status: "pending" };
      } catch (error) {
        console.error("Error creating deployment:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create deployment",
        });
      }
    }),

  /**
   * Get deployment statistics for the current user
   */
  getStats: protectedProcedure
    .query(async ({ ctx }) => {
      try {
        const stats = await deploymentDb.getDeploymentStats(ctx.user.id);
        return stats;
      } catch (error) {
        console.error("Error getting deployment stats:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to get deployment statistics",
        });
      }
    }),

  /**
   * Get or create GitHub integration
   */
  setupGitHubIntegration: protectedProcedure
    .input(z.object({
      repositoryUrl: z.string().url(),
      repositoryName: z.string(),
      repositoryOwner: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        const integration = await deploymentDb.getOrCreateGitHubIntegration(
          ctx.user.id,
          input.repositoryUrl,
          input.repositoryName,
          input.repositoryOwner,
        );

        await deploymentDb.addDeploymentLog({
          deploymentId: 0, // Will need to adjust this
          logLevel: "info",
          message: `GitHub integration setup for ${input.repositoryName}`,
        });

        return integration;
      } catch (error) {
        console.error("Error setting up GitHub integration:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to setup GitHub integration",
        });
      }
    }),

  /**
   * Get user's GitHub integrations
   */
  listGitHubIntegrations: protectedProcedure
    .query(async ({ ctx }) => {
      try {
        const integrations = await deploymentDb.getUserGitHubIntegrations(ctx.user.id);
        return integrations;
      } catch (error) {
        console.error("Error listing GitHub integrations:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to list GitHub integrations",
        });
      }
    }),

  /**
   * Configure webhook for automatic deployments
   */
  configureWebhook: protectedProcedure
    .input(z.object({
      integrationId: z.number(),
      webhookUrl: z.string().url(),
      webhookSecret: z.string(),
      autoDeployOnPush: z.boolean().default(false),
      autoDeployBranch: z.string().default("main"),
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        // Verify the integration belongs to the user
        const integrations = await deploymentDb.getUserGitHubIntegrations(ctx.user.id);
        const integration = integrations.find((i: any) => i.id === input.integrationId);

        if (!integration) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "GitHub integration not found",
          });
        }

        await deploymentDb.updateGitHubIntegrationWebhook(
          input.integrationId,
          input.webhookUrl,
          input.webhookSecret,
          input.autoDeployOnPush,
          input.autoDeployBranch,
        );

        return { success: true, message: "Webhook configured successfully" };
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("Error configuring webhook:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to configure webhook",
        });
      }
    }),
});
