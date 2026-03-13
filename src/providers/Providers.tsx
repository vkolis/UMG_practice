import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "@mui/material/styles"
import { useState, type ReactNode } from "react"
import { CssBaseline } from "@mui/material"
import { createAppTheme } from "@/theme/createAppTheme"
import { ThemeModeContext, type ThemeValue } from "@/providers"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
})

export const Providers = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeValue>("light")
  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
        <ThemeProvider theme={createAppTheme(mode)}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </QueryClientProvider>
  )
}
