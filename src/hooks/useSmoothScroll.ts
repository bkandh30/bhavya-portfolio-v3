import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function useSmoothScroll(): void {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = prefersReducedMotion
      ? "auto"
      : "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [prefersReducedMotion]);
}
