import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
})

const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(6px)",
            backgroundColor: alpha("#0f172a", 0.18),
          },
        },
        paper: {
          borderRadius: 16,
        },
      },
    },
  },
})

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          {children}
        </CssBaseline>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
