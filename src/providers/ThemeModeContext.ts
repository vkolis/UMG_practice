import { createContext } from 'react';

export type ThemeMode = {
  mode: 'light' | 'dark',
  toggleTheme: () => void
}

export const ThemeModeContext = createContext<ThemeMode | null>(null)
