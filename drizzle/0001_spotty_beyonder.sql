CREATE TABLE `deployedFiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`deploymentId` int NOT NULL,
	`filePath` varchar(512) NOT NULL,
	`fileName` varchar(255) NOT NULL,
	`fileSize` int,
	`fileType` varchar(50),
	`status` enum('pending','deployed','failed','skipped') NOT NULL DEFAULT 'pending',
	`checksum` varchar(64),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `deployedFiles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `deploymentLogs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`deploymentId` int NOT NULL,
	`logLevel` enum('info','warning','error','debug') NOT NULL DEFAULT 'info',
	`message` text NOT NULL,
	`details` json,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `deploymentLogs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `deployments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`repositoryUrl` varchar(512) NOT NULL,
	`repositoryName` varchar(255) NOT NULL,
	`branch` varchar(255) NOT NULL DEFAULT 'main',
	`status` enum('pending','in_progress','success','failed','cancelled') NOT NULL DEFAULT 'pending',
	`deploymentType` enum('manual','webhook','scheduled') NOT NULL DEFAULT 'manual',
	`commitHash` varchar(64),
	`commitMessage` text,
	`deployedAt` timestamp,
	`completedAt` timestamp,
	`errorMessage` text,
	`filesDeployed` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `deployments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `githubIntegrations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`repositoryUrl` varchar(512) NOT NULL,
	`repositoryName` varchar(255) NOT NULL,
	`repositoryOwner` varchar(255) NOT NULL,
	`webhookUrl` varchar(512),
	`webhookSecret` varchar(255),
	`isActive` boolean NOT NULL DEFAULT true,
	`lastSyncedAt` timestamp,
	`autoDeployOnPush` boolean NOT NULL DEFAULT false,
	`autoDeployBranch` varchar(255) DEFAULT 'main',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `githubIntegrations_id` PRIMARY KEY(`id`)
);
