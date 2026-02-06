export type ViewMode = 'systems' | 'living'

export interface ViewModeContextType {
  mode: ViewMode
  toggleMode: () => void
  setMode: (mode: ViewMode) => void
}

export interface ThemeConfig {
  background: string
  foreground: string
  accent: string
  muted: string
  dim: string
  primary?: string
}

export const systemsTheme: ThemeConfig = {
  background: '#0A0A0A',
  foreground: '#FAFAFA',
  accent: '#00FF94',
  muted: '#3A3A3A',
  dim: '#666666',
}

export const livingTheme: ThemeConfig = {
  background: '#2a1810',
  foreground: '#f5f1e8',
  accent: '#4a7c59',
  muted: '#5a4a3a',
  dim: '#8a7a6a',
  primary: '#d4a574',
}

