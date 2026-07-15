import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Remove the static hero background element once the app is interactive.
// React's Hero section naturally covers it, but we clean it up to free memory.
if ("requestIdleCallback" in window) {
  requestIdleCallback(() => { document.getElementById("hero-static")?.remove(); }, { timeout: 8000 });
} else {
  window.addEventListener("load", () => { document.getElementById("hero-static")?.remove(); });
}
