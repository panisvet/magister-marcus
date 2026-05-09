import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Latin from './pages/Latin.jsx'
import MagisterNatura from './pages/MagisterNatura.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latin" element={<Latin />} />
        <Route path="/magister-natura" element={<MagisterNatura />} />
        {/* Add future subjects here:
        <Route path="/math"    element={<Math />} />
        <Route path="/history" element={<History />} />
        */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
