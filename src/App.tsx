import WebApp from "@twa-dev/sdk";
import "./App.css";
import { Route, Routes } from "react-router";
import Main from "./pages/main/index.tsx";
import Mates from "./pages/mates.tsx";
import Tasks from "./pages/tasks.tsx";
import Ranking from "./pages/ranking.tsx";
import Stats from "./pages/stats.tsx";
import Wallet from "./pages/wallet.tsx";
import LanguageSelection from "./pages/language-selection.tsx";
import Agreement from "./pages/agreement.tsx";
import InvestOnTruedapp from "./pages/main/invest-on-truedapp.tsx";
import BuyTGM from "./pages/main/buy-tgm.tsx";
import Loading from "./components/ui/loading.tsx";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="m-10">
          <Routes>
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
          {WebApp.initDataUnsafe.user?.username}
        </div>
      )}
    </>
  );
}

export default App;
