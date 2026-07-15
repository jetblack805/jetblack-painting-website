import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
// #hero-static stays in the DOM intentionally — removing it causes the browser to
// discard its LCP entry and seek a new candidate (the React Hero img at ~5 s),
// which resets LCP. The element is visually hidden behind #root (z-index:1).
