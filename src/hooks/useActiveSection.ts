import { useState, useEffect } from "react";
import { useScrollState } from "@/hooks/useScrollState";

export function useActiveSection(sectionIds: readonly string[]): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const { scrollY, viewportHeight } = useScrollState();

  useEffect(() => {
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

    setActiveSection((prev) => (prev === nextSection ? prev : nextSection));
  }, [scrollY, viewportHeight, sectionIds]);

  return activeSection;
}
