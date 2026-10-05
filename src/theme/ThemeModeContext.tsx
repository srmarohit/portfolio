import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createAppTheme, type ThemeMode } from "./theme";
import {
  ThemeModeContext,
  type ThemeModeContextValue,
} from "./themeModeContextInstance";

const STORAGE_KEY = "portfolio-theme-mode";

function getInitialMode(): ThemeMode {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const value = useMemo<ThemeModeContextValue>(
    () => ({
      mode,
      toggleMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
