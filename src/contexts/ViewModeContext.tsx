'use client'

import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { ViewMode, ViewModeContextType } from '@/types/mode'

export const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined)

interface ViewModeProviderProps {
  children: ReactNode
}

export function ViewModeProvider({ children }: ViewModeProviderProps) {
  const [mode, setModeState] = useState<ViewMode>('systems')
  const [isInitialized, setIsInitialized] = useState(false)

  // Load mode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('viewMode') as ViewMode | null
    if (savedMode === 'systems' || savedMode === 'living') {
      setModeState(savedMode)
    }
    setIsInitialized(true)
  }, [])

  // Update document class and CSS variables when mode changes
  useEffect(() => {
    if (!isInitialized) return

    const root = document.documentElement
    
    if (mode === 'living') {
      root.classList.add('living-mode')
      root.style.setProperty('--color-bg', '#2a1810')
      root.style.setProperty('--color-fg', '#f5f1e8')
      root.style.setProperty('--color-accent', '#4a7c59')
      root.style.setProperty('--color-primary', '#d4a574')
      root.style.setProperty('--color-muted', '#5a4a3a')
      root.style.setProperty('--color-dim', '#8a7a6a')
    } else {
      root.classList.remove('living-mode')
      root.style.setProperty('--color-bg', '#0A0A0A')
      root.style.setProperty('--color-fg', '#FAFAFA')
      root.style.setProperty('--color-accent', '#00FF94')
      root.style.setProperty('--color-primary', '#00FF94')
      root.style.setProperty('--color-muted', '#3A3A3A')
      root.style.setProperty('--color-dim', '#666666')
    }

    // Save to localStorage
    localStorage.setItem('viewMode', mode)
  }, [mode, isInitialized])

  const toggleMode = () => {
    setModeState(prev => prev === 'systems' ? 'living' : 'systems')
  }

  const setMode = (newMode: ViewMode) => {
    setModeState(newMode)
  }

  return (
    <ViewModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ViewModeContext.Provider>
  )
}

