import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'

WebApp.ready()

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/my-react-telegram-mini-app">
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
)
