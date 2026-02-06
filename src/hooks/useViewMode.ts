'use client'

import { useContext } from 'react'
import { ViewModeContext } from '@/contexts/ViewModeContext'

export function useViewMode() {
  const context = useContext(ViewModeContext)
  
  if (context === undefined) {
    throw new Error('useViewMode must be used within a ViewModeProvider')
  }
  
  return context
}

