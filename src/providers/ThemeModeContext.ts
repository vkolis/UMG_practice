import { createContext } from 'react';

export type ThemeValue = 'light' | 'dark'

export type ThemeMode = {
  mode: ThemeValue,
  toggleTheme: () => void
}

export const ThemeModeContext = createContext<ThemeMode | null>(null)
