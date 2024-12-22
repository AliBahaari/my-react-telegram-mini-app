import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import WebApp from "@twa-dev/sdk";
import "./index.css";
import { BrowserRouter } from "react-router";
import { LanguageProvider } from "./contexts/languageContext.tsx";
import { AgreementProvider } from "./contexts/agreementContext.tsx";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

WebApp.ready();

const manifestUrl =
  "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LanguageProvider>
          <AgreementProvider>
            <App />
          </AgreementProvider>
        </LanguageProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </TonConnectUIProvider>
);
