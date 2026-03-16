import { alpha, createTheme } from "@mui/material/styles"

export const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#2563eb",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#64748b",
    },
    divider: "#e2e8f0",
  },
  shape: {
    borderRadius: 16,
  },
})

export const theme = createTheme(baseTheme, {
  components: {
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(6px)",
            backgroundColor: alpha(baseTheme.palette.text.primary, 0.18),
          },
        },
        paper: {
          borderRadius: baseTheme.shape.borderRadius,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          borderRadius: baseTheme.shape.borderRadius,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          borderRadius: baseTheme.shape.borderRadius,
        }
      }
    }
  }
})
