import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReadingApp from './reading/ReadingApp.jsx'
import SoundsBoard from './reading/SoundsBoard.jsx'
import Home from './pages/Home.jsx'
import Latin from './pages/Latin.jsx'
import MagisterNatura from './pages/MagisterNatura.jsx'
import LessonViewer from './pages/LessonViewer.jsx'
import ScholaCantorum from './pages/ScholaCantorum.jsx'
import RegentNikolay from './pages/RegentNikolay.jsx'
import MagisterHistoria from "./pages/MagisterHistoria"
import MagisterArtis from "./pages/MagisterArtis.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<ReadingApp />} />
        <Route path="/sounds" element={<SoundsBoard />} />
        <Route path="/latin" element={<Latin />} />
        <Route path="/magister-natura" element={<MagisterNatura />} />
        <Route path="/lesson-viewer" element={<LessonViewer />} />
        <Route path="/schola-cantorum" element={<ScholaCantorum />} />
        <Route path="/regent-nikolay" element={<RegentNikolay />} />
        <Route path="/history" element={<MagisterHistoria />} />
        <Route path="/magister-artis" element={<MagisterArtis />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
