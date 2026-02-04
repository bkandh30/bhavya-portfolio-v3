import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { applySystemThemeClass } from "@/lib/theme";

if (import.meta.env.PROD) {
  injectSpeedInsights();
}

applySystemThemeClass();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
