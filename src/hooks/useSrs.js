import { useState, useCallback } from 'react'
import { loadSrs, saveSrs, recordReview as recordReviewPure } from '../srs.js'
import { queueRecall } from '../sync.js'

// useSrs — reads/writes one learner's spaced-repetition (mastery) store.
// The store IS the mastery record; `review(card, grade)` is the single mastery
// event every tab calls when a learner demonstrates recall.
// Each review is also queued for Homeschool OS (see sync.js).
export function useSrs(profileId) {
  const [store, setStore] = useState(() => loadSrs(profileId))

  const review = useCallback((card, grade) => {
    const before = loadSrs(profileId)[card.id]
    queueRecall(profileId, card, grade, !!(before && before.lastReviewed))
    setStore(prev => {
      const next = recordReviewPure(prev, card, grade)
      saveSrs(profileId, next)
      return next
    })
  }, [profileId])

  const reload = useCallback(() => setStore(loadSrs(profileId)), [profileId])

  return { store, review, reload }
}
