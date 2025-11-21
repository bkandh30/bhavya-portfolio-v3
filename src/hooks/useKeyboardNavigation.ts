import { useEffect, useCallback } from 'react';

export function useKeyboardNavigation(
  sectionIds: readonly string[],
  activeSection: string,
  scrollToSection: (id: string) => void
): void {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (!event.altKey) return;
      if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;

      event.preventDefault();

      const currentIndex = sectionIds.indexOf(activeSection);
      if (currentIndex === -1) return;

      let nextIndex: number;
      if (event.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % sectionIds.length;
      } else {
        nextIndex = currentIndex === 0 ? sectionIds.length - 1 : currentIndex - 1;
      }

      scrollToSection(sectionIds[nextIndex]);
    },
    [sectionIds, activeSection, scrollToSection]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}