export const SPACING = {
  spotlight: {
    radius: 400,
  },
  scroll: {
    threshold: 300,
  },
  cardBorder: {
    heightDefault: 0,
    heightHover: 80,
  },
} as const;

export function getCSSVariable(variable: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
}

export const getThemeColor = (color: string) => 
  getCSSVariable(`--color-${color}`);