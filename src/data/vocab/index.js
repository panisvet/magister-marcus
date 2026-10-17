// Vocabula — every vocabulary deck the site offers.
// Adding a lesson = adding it to that deck's JSON file (no code change).
// Adding a deck (e.g. Elementa Latin) = one JSON file + one line below.
import french1 from './french-1.json'

export const DECKS = [french1]

export const deckById = (id) => DECKS.find((d) => d.id === id)
