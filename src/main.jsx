import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Latin from './pages/Latin.jsx'
import MagisterNatura from './pages/MagisterNatura.jsx'
import LessonViewer from './pages/LessonViewer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latin" element={<Latin />} />
        <Route path="/magister-natura" element={<MagisterNatura />} />
        <Route path="/lesson-viewer" element={<LessonViewer />} />
        {/* Add future subjects here:
        <Route path="/math"    element={<Math />} />
        <Route path="/history" element={<History />} />
        */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
