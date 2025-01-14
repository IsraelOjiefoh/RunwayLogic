import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EmailProvider } from "./EmailContext";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EmailProvider>
      <App />
    </EmailProvider>
  </StrictMode>
);
