import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const FavoritesContext = createContext(null)
const STORAGE_KEY = 'ta_favorites'

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const value = useMemo(() => ({
    favorites,
    totalFavorites: favorites.length,
    isFavorite: (id) => favorites.some(product => product.id === id),
    toggleFavorite: (product) => {
      setFavorites(current => (
        current.some(item => item.id === product.id)
          ? current.filter(item => item.id !== product.id)
          : [...current, product]
      ))
    },
    removeFavorite: (id) => setFavorites(current => current.filter(item => item.id !== id)),
    clearFavorites: () => setFavorites([]),
  }), [favorites])

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be inside FavoritesProvider')
  return ctx
}
