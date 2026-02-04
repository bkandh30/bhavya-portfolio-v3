import { useEffect, useState } from "react";
import { getSystemTheme, watchSystemTheme } from "@/lib/theme";
import type { ThemeMode } from "@/lib/theme";

export const useSystemTheme = (): ThemeMode => {
  const [theme, setTheme] = useState<ThemeMode>(() => getSystemTheme());

  useEffect(() => {
    return watchSystemTheme(setTheme);
  }, []);

  return theme;
};
