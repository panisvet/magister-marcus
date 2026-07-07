import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ViaLatina from './pages/ViaLatina.jsx'
import LessonPage from './pages/LessonPage.jsx'
import Latin from './pages/Latin.jsx'
import LessonViewer from './pages/LessonViewer.jsx'
import MagisterNatura from './pages/MagisterNatura.jsx'
import MagisterHistoria from './pages/MagisterHistoria.jsx'
import MagisterArtis from './pages/MagisterArtis.jsx'
import ScholaCantorum from './pages/ScholaCantorum.jsx'
import RegentNikolay from './pages/RegentNikolay.jsx'
import ReadingApp from './reading/ReadingApp.jsx'
import SoundsBoard from './reading/SoundsBoard.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/via-latina" element={<ViaLatina />} />
      <Route path="/lesson/:stage/:lessonId" element={<LessonPage />} />
      <Route path="/latin" element={<Latin />} />
      <Route path="/read" element={<ReadingApp />} />
      <Route path="/sounds" element={<SoundsBoard />} />
      <Route path="/magister-natura" element={<MagisterNatura />} />
      <Route path="/lesson-viewer" element={<LessonViewer />} />
      <Route path="/schola-cantorum" element={<ScholaCantorum />} />
      <Route path="/regent-nikolay" element={<RegentNikolay />} />
      <Route path="/history" element={<MagisterHistoria />} />
      <Route path="/magister-artis" element={<MagisterArtis />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
