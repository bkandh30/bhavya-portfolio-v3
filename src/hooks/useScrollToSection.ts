import { useCallback } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function useScrollToSection(): (id: string) => void {
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToSection = useCallback((id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  }, [prefersReducedMotion]);

  return scrollToSection;
}
