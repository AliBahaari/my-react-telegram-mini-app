import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import WebApp from "@twa-dev/sdk";
import "./index.css";
import { BrowserRouter } from "react-router";
import { LanguageProvider } from "./contexts/languageContext.tsx";
import { AgreementProvider } from "./contexts/agreementContext.tsx";

WebApp.ready();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LanguageProvider>
      <AgreementProvider>
        <App />
      </AgreementProvider>
    </LanguageProvider>
  </BrowserRouter>
);
