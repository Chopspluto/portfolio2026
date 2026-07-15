import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './index.css'
import './styles/global.css';
import './styles/home.css';
import './styles/responsive.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio2026">
      {/* <App /> */}
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>

  // basename="/portfolio2026"
)
