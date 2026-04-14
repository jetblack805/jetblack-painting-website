import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trpc } from "@/lib/trpc";
import { Loader2, GitBranch, Clock, CheckCircle, AlertCircle, Github } from "lucide-react";
import { useState } from "react";

export default function DeploymentDashboard() {
  const { user, isAuthenticated } = useAuth();
  const [selectedDeploymentId, setSelectedDeploymentId] = useState<number | null>(null);

  const { data: deployments, isLoading: deploymentsLoading } = trpc.deployment.listDeployments.useQuery(
    { limit: 20, offset: 0 },
    { enabled: isAuthenticated }
  );

  const { data: stats, isLoading: statsLoading } = trpc.deployment.getStats.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  const { data: githubIntegrations } = trpc.deployment.listGitHubIntegrations.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  const { data: selectedDeployment } = trpc.deployment.getDeployment.useQuery(
    { deploymentId: selectedDeploymentId || 0 },
    { enabled: selectedDeploymentId !== null }
  );

  const createDeploymentMutation = trpc.deployment.createDeployment.useMutation();

  const handleCreateDeployment = async () => {
    try {
      const result = await createDeploymentMutation.mutateAsync({
        repositoryUrl: "https://github.com/jetblack805/JetblackPainting-SEO",
        repositoryName: "JetblackPainting-SEO",
        branch: "main",
      });
      console.log("Deployment created:", result);
    } catch (error) {
      console.error("Failed to create deployment:", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Please log in to access the deployment dashboard.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "failed":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case "in_progress":
        return <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "success":
        return "default";
      case "failed":
        return "destructive";
      case "in_progress":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Deployment Dashboard</h1>
          <p className="text-muted-foreground">Manage your Jetblack Painting website deployments and GitHub integration.</p>
        </div>

        {/* Statistics Cards */}
        {!statsLoading && stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Deployments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Successful</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{stats.successful}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Failed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{stats.failed}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{stats.inProgress}</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Main Content Tabs */}
        <Tabs defaultValue="deployments" className="space-y-4">
          <TabsList>
            <TabsTrigger value="deployments">Deployments</TabsTrigger>
            <TabsTrigger value="github">GitHub Integration</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
          </TabsList>

          {/* Deployments Tab */}
          <TabsContent value="deployments" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Deployment History</h2>
              <Button onClick={handleCreateDeployment} disabled={createDeploymentMutation.isPending}>
                {createDeploymentMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "New Deployment"
                )}
              </Button>
            </div>

            {deploymentsLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
              </div>
            ) : deployments && deployments.length > 0 ? (
              <div className="space-y-2">
                {deployments.map((deployment: any) => (
                  <Card
                    key={deployment.id}
                    className="cursor-pointer hover:bg-accent transition-colors"
                    onClick={() => setSelectedDeploymentId(deployment.id)}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(deployment.status)}
                            <Badge variant={getStatusBadgeVariant(deployment.status)}>
                              {deployment.status}
                            </Badge>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{deployment.repositoryName}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <GitBranch className="w-3 h-3" />
                              <span>{deployment.branch}</span>
                              <span>•</span>
                              <span>{deployment.deploymentType}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{deployment.filesDeployed} files</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(deployment.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground">No deployments yet. Create your first deployment to get started.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* GitHub Integration Tab */}
          <TabsContent value="github" className="space-y-4">
            <h2 className="text-xl font-semibold">GitHub Integration</h2>
            {githubIntegrations && githubIntegrations.length > 0 ? (
              <div className="space-y-2">
                {githubIntegrations.map((integration: any) => (
                  <Card key={integration.id}>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Github className="w-5 h-5" />
                        <div>
                          <CardTitle className="text-lg">{integration.repositoryName}</CardTitle>
                          <CardDescription>{integration.repositoryUrl}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Owner</p>
                          <p className="text-sm text-muted-foreground">{integration.repositoryOwner}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Status</p>
                          <Badge variant={integration.isActive ? "default" : "secondary"}>
                            {integration.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Auto Deploy</p>
                          <Badge variant={integration.autoDeployOnPush ? "default" : "outline"}>
                            {integration.autoDeployOnPush ? "Enabled" : "Disabled"}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Deploy Branch</p>
                          <p className="text-sm text-muted-foreground">{integration.autoDeployBranch}</p>
                        </div>
                      </div>
                      {integration.lastSyncedAt && (
                        <p className="text-xs text-muted-foreground">
                          Last synced: {new Date(integration.lastSyncedAt).toLocaleString()}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground">No GitHub integrations configured yet.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Files Tab */}
          <TabsContent value="files" className="space-y-4">
            <h2 className="text-xl font-semibold">Deployed Files</h2>
            {selectedDeployment && selectedDeployment.files && selectedDeployment.files.length > 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    {selectedDeployment.files.map((file: any) => (
                      <div key={file.id} className="flex items-center justify-between p-2 border rounded">
                        <div>
                          <p className="font-medium text-sm">{file.fileName}</p>
                          <p className="text-xs text-muted-foreground">{file.filePath}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={getStatusBadgeVariant(file.status)}>{file.status}</Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {file.fileSize ? `${(file.fileSize / 1024).toFixed(2)} KB` : "N/A"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground">
                    {selectedDeploymentId ? "No files in this deployment." : "Select a deployment to view its files."}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
