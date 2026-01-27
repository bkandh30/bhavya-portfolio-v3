import { useMemo } from "react";
import { useScrollState } from "@/hooks/useScrollState";

export function useActiveSection(sectionIds: readonly string[]): string {
  const { scrollY, viewportHeight } = useScrollState();

  return useMemo(() => {
    if (typeof document === "undefined") {
      return sectionIds[0] || "";
    }

    const scrollPosition = scrollY + viewportHeight / 2;
    let nextSection = sectionIds[0] || "";

    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          nextSection = sectionId;
          break;
        }
      }
    }

    return nextSection;
  }, [scrollY, viewportHeight, sectionIds]);
}
