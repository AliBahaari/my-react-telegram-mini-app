import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import WebApp from "@twa-dev/sdk";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./pages/main.tsx";
import Mates from "./pages/mates.tsx";
import Tasks from "./pages/tasks.tsx";

WebApp.ready();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/main" element={<Main />} />
      <Route path="/mates" element={<Mates />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  </BrowserRouter>
);
