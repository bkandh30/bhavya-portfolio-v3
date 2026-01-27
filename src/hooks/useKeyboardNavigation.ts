import { useEffect, useCallback, useMemo } from 'react';

export function useKeyboardNavigation(
  sectionIds: readonly string[],
  activeSection: string,
  scrollToSection: (id: string) => void
): void {
  // Create a Map for O(1) index lookup instead of O(n) indexOf
  const sectionIndexMap = useMemo(() => {
    const map = new Map<string, number>();
    sectionIds.forEach((id, index) => {
      map.set(id, index);
    });
    return map;
  }, [sectionIds]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (!event.altKey) return;
      if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;

      event.preventDefault();

      // O(1) Map lookup instead of O(n) indexOf
      const currentIndex = sectionIndexMap.get(activeSection);
      if (currentIndex === undefined) return;

      let nextIndex: number;
      if (event.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % sectionIds.length;
      } else {
        nextIndex = currentIndex === 0 ? sectionIds.length - 1 : currentIndex - 1;
      }

      scrollToSection(sectionIds[nextIndex]);
    },
    [sectionIds, sectionIndexMap, activeSection, scrollToSection]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
