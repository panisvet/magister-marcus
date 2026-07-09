import LessonViewer from './LessonViewer.jsx'
import { UNITS } from '../data/lessons-year2.js'

// Wonders of the Created World — YEAR TWO.
// Reuses the LessonViewer renderer with the Year Two lesson dataset.
export default function LessonViewerY2() {
  return <LessonViewer units={UNITS} />
}
