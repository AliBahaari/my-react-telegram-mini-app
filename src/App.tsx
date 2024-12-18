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

function App() {
  return (
    <div className="m-10">
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
      {/* <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <Button>Click Me</Button>
      <button onClick={() => WebApp.showAlert(`Hello World!`)}>
        Show Alert
      </button>
 */}
      {WebApp.initDataUnsafe.user?.username}
    </div>
  );
}

export default App;
