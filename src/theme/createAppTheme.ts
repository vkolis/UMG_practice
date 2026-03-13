import type { ThemeValue } from "@/providers"
// import { baseTheme } from "@/theme"
import { createTheme } from "@mui/material"
import { baseTheme } from "@/theme"

export const createAppTheme = (mode: ThemeValue) => {
  const isDark = mode === "dark"
  return createTheme(baseTheme,{
    palette: {
      background: {
        default: isDark ? "#0f172a" : "#f8fafc",
        paper: isDark ? "#111827" : "#ffffff",
      },
    }
  })
}