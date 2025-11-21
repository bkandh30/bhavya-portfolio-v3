import { useCallback } from 'react';

export function useScrollToSection(): (id: string) => void {
  const scrollToSection = useCallback((id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return scrollToSection;
}