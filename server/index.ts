import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { setupVite } from "./_core/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CANONICAL_HOST = "jetblackpainting.com";

async function startServer() {
  const app = express();
  const server = createServer(app);

  // The site has permanently moved to https://jetblackpainting.com.
  // Every request to this legacy deployment must return a real HTTP 301
  // (not a meta refresh or JS redirect) with the path preserved — required
  // for Google Search Console's Change of Address validation.
  app.use((req, res, next) => {
    const host = (req.headers.host ?? "").toLowerCase().split(":")[0];
    if (host === CANONICAL_HOST || host === "localhost" || host === "127.0.0.1") {
      return next();
    }
    return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
  });

  // Force HTTPS behind the proxy (Railway/Cloudflare set x-forwarded-proto)
  app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] === "http") {
      return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
    }
    next();
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
