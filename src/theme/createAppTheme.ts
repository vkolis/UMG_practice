import { alpha, createTheme } from "@mui/material/styles"
import type { ThemeValue } from "@/providers"
import { baseTheme } from "./baseTheme"

export const createAppTheme = (mode: ThemeValue) => {
  const isDark = mode === "dark"
  const backgroundDefault = isDark ? "#0f172a" : baseTheme.palette.background.default
  const backgroundPaper = isDark ? "#111827" : baseTheme.palette.background.paper
  const textPrimary = isDark ? "#f8fafc" : baseTheme.palette.text.primary
  const textSecondary = isDark ? "#cbd5e1" : baseTheme.palette.text.secondary
  const divider = isDark ? "#334155" : baseTheme.palette.divider
  const chipBackground = isDark
    ? alpha(baseTheme.palette.primary.main, 0.18)
    : alpha(baseTheme.palette.primary.main, 0.08)
  const iconButtonHoverColor = baseTheme.palette.primary.main
  const iconButtonHoverBackground = isDark
    ? alpha(baseTheme.palette.primary.main, 0.18)
    : alpha(baseTheme.palette.primary.main, 0.1)

  return createTheme(baseTheme, {
    palette: {
      mode,
      primary: {
        main: baseTheme.palette.primary.main,
      },
      background: {
        default: backgroundDefault,
        paper: backgroundPaper,
      },
      text: {
        primary: textPrimary,
        secondary: textSecondary,
      },
      divider
    },
    components: {
      MuiDialog: {
        styleOverrides: {
          root: {
            "& .MuiBackdrop-root": {
              backdropFilter: "blur(6px)",
              backgroundColor: alpha(textPrimary, isDark ? 0.32 : 0.18),
            },
            "& .MuiIconButton-root": {
              color: textPrimary,
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
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            "--IconButton-hoverBg": iconButtonHoverBackground,
            "&:hover": {
              color: iconButtonHoverColor,
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: chipBackground,
            "& .MuiChip-deleteIcon": {
              color: alpha(textPrimary, 0.6),
              "&:hover": {
                color: textPrimary,
              },
            },
          },
        },
      },
    },
  })
}
