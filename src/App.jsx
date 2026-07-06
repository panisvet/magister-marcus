import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ViaLatina from './pages/ViaLatina.jsx'
import LessonPage from './pages/LessonPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/via-latina" element={<ViaLatina />} />
      <Route path="/lesson/:stage/:lessonId" element={<LessonPage />} />
    </Routes>
  )
}
