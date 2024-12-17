import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import WebApp from "@twa-dev/sdk";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./pages/main.tsx";
import Mates from "./pages/mates.tsx";
import Tasks from "./pages/tasks.tsx";
import Ranking from "./pages/ranking.tsx";
import Stats from "./pages/stats.tsx";
import Wallet from "./pages/wallet.tsx";
import LanguageSelection from "./pages/language-selection.tsx";
import Agreement from "./pages/agreement.tsx";
import InvestOnTruedapp from "./pages/invest-on-truedapp.tsx";
import BuyTGM from "./pages/buy-tgm.tsx";

WebApp.ready();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/main" element={<Main />} />
      <Route path="/mates" element={<Mates />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/language-selection" element={<LanguageSelection />} />
      <Route path="/agreement" element={<Agreement />} />
      <Route path="/invest-on-truedapp" element={<InvestOnTruedapp />} />
      <Route path="/buy-tgm" element={<BuyTGM />} />
    </Routes>
  </BrowserRouter>
);
