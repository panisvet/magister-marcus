import { useState, useCallback } from 'react'

// Progress structure per profile:
// { [stage]: { [lessonId]: { completed: bool, tabsDone: string[], lastVisited: number } } }

function loadProgress(profileId) {
  try {
    return JSON.parse(localStorage.getItem(`vl_progress_${profileId}`)) || {}
  } catch {
    return {}
  }
}

function saveProgress(profileId, progress) {
  localStorage.setItem(`vl_progress_${profileId}`, JSON.stringify(progress))
}

export function useProgress(profileId) {
  const [progress, setProgress] = useState(() => loadProgress(profileId))

  const getLessonProgress = useCallback((stage, lessonId) => {
    return progress?.[stage]?.[lessonId] || { completed: false, tabsDone: [], lastVisited: null }
  }, [progress])

  const markTabDone = useCallback((stage, lessonId, tab) => {
    setProgress(prev => {
      const updated = { ...prev }
      if (!updated[stage]) updated[stage] = {}
      if (!updated[stage][lessonId]) updated[stage][lessonId] = { completed: false, tabsDone: [], lastVisited: null }
      const tabs = updated[stage][lessonId].tabsDone
      if (!tabs.includes(tab)) {
        updated[stage][lessonId] = {
          ...updated[stage][lessonId],
          tabsDone: [...tabs, tab],
          lastVisited: Date.now(),
        }
      }
      saveProgress(profileId, updated)
      return updated
    })
  }, [profileId])

  const markLessonComplete = useCallback((stage, lessonId) => {
    setProgress(prev => {
      const updated = { ...prev }
      if (!updated[stage]) updated[stage] = {}
      updated[stage][lessonId] = {
        ...updated[stage]?.[lessonId],
        completed: true,
        lastVisited: Date.now(),
      }
      saveProgress(profileId, updated)
      return updated
    })
  }, [profileId])

  // Returns how many lessons in a stage are completed
  const stageProgress = useCallback((stage, totalLessons) => {
    const stageData = progress?.[stage] || {}
    const done = Object.values(stageData).filter(l => l.completed).length
    return { done, total: totalLessons, pct: totalLessons ? Math.round(done / totalLessons * 100) : 0 }
  }, [progress])

  // A lesson is unlocked if it's lesson 1, previous lesson is complete,
  // or the profile name is TEST (full audit access).
  const isUnlocked = useCallback((stage, lessonIndex, orderedLessonIds, profileName = '') => {
    if (profileName.trim().toUpperCase() === 'TEST') return true
    if (lessonIndex === 0) return true
    const prevId = orderedLessonIds[lessonIndex - 1]
    return progress?.[stage]?.[prevId]?.completed === true
  }, [progress])

  return { getLessonProgress, markTabDone, markLessonComplete, stageProgress, isUnlocked }
}
