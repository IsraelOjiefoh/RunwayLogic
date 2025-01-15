import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EmailProvider } from "../Context/EmailContext.tsx";
import { OccupationProvider } from "../Context/OccupationContext.tsx";
import { UserProvider } from "../Context/UserContext.tsx";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <OccupationProvider>
        <EmailProvider>
          <App />
        </EmailProvider>
      </OccupationProvider>
    </UserProvider>
  </StrictMode>
);
