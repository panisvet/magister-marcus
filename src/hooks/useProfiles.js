import { useState, useCallback } from 'react'

const STORAGE_KEY = 'vl_profiles'
const ACTIVE_KEY  = 'vl_active_profile'
const MAX_PROFILES = 4

const DEFAULT_PROFILES = [
  { id: 'default', name: 'Learner 1', avatar: 'L', createdAt: Date.now() }
]

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || DEFAULT_PROFILES
  } catch {
    return DEFAULT_PROFILES
  }
}

function save(profiles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles))
}

export function useProfiles() {
  const [profiles, setProfiles] = useState(() => load())
  const [activeId, setActiveId] = useState(
    () => localStorage.getItem(ACTIVE_KEY) || load()[0]?.id || 'default'
  )

  const activeProfile = profiles.find(p => p.id === activeId) || profiles[0]

  const switchProfile = useCallback((id) => {
    setActiveId(id)
    localStorage.setItem(ACTIVE_KEY, id)
  }, [])

  const addProfile = useCallback((name) => {
    if (!name?.trim()) return null
    const existing = load()
    if (existing.length >= MAX_PROFILES) return null
    const id = crypto.randomUUID()
    const initial = name.trim()[0].toUpperCase()
    const next = [...existing, { id, name: name.trim(), avatar: initial, createdAt: Date.now() }]
    save(next)
    setProfiles(next)
    switchProfile(id)
    return id
  }, [switchProfile])

  const removeProfile = useCallback((id) => {
    const existing = load()
    if (existing.length <= 1) return
    const next = existing.filter(p => p.id !== id)
    save(next)
    setProfiles(next)
    if (activeId === id) switchProfile(next[0].id)
    // Clean up progress for removed profile
    localStorage.removeItem(`vl_progress_${id}`)
  }, [activeId, switchProfile])

  return { profiles, activeProfile, activeId, switchProfile, addProfile, removeProfile }
}
