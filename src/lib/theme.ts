export type ThemeMode = "light" | "dark";

const THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";

export const getSystemTheme = (): ThemeMode => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "light";
  }

  return window.matchMedia(THEME_MEDIA_QUERY).matches ? "dark" : "light";
};

export const applySystemThemeClass = (
  theme: ThemeMode = getSystemTheme()
): void => {
  if (typeof document === "undefined") return;

  document.documentElement.classList.toggle("dark", theme === "dark");
};

export const watchSystemTheme = (
  onChange?: (theme: ThemeMode) => void
): (() => void) => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return () => {};
  }

  const media = window.matchMedia(THEME_MEDIA_QUERY);

  const handleChange = (event: MediaQueryListEvent): void => {
    const theme = event.matches ? "dark" : "light";
    applySystemThemeClass(theme);
    onChange?.(theme);
  };

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }

  media.addListener(handleChange);
  return () => media.removeListener(handleChange);
};
