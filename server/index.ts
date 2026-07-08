import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { setupVite } from "./_core/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // The site now lives at jetblackpainting.com (Cloudflare). This Express
  // server only still runs on the old Manus deployment, whose sole job is
  // to 301 every request to the new domain — required for Google Search
  // Console's Change of Address validation.
  app.use((req, res) => {
    res.redirect(301, `https://jetblackpainting.com${req.originalUrl}`);
  });

  if (process.env.NODE_ENV !== "production") {
    await setupVite(app, server);
  } else {
    // Serve static files from dist/public in production
    const staticPath = path.resolve(__dirname, "public");
    app.use(express.static(staticPath));

    // Handle client-side routing - serve index.html for all routes
    app.get("*", (_req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });
  }

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
