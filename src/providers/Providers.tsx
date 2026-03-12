import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "@mui/material/styles"
import { useState, type ReactNode } from "react"
import { CssBaseline } from "@mui/material"
import { theme } from "@/theme/theme"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
})

export const Providers = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("light")

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  )
}
