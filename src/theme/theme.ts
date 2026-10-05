import { createTheme, type ThemeOptions } from "@mui/material/styles";

export type ThemeMode = "light" | "dark";

const getDesignTokens = (mode: ThemeMode): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? "#64ffda" : "#0a66c2",
    },
    secondary: {
      main: mode === "dark" ? "#f48fb1" : "#9c27b0",
    },
    background: {
      default: mode === "dark" ? "#0a192f" : "#f5f7fa",
      paper: mode === "dark" ? "#112240" : "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
});

export const createAppTheme = (mode: ThemeMode) =>
  createTheme(getDesignTokens(mode));
