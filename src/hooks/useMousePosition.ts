import { useEffect } from 'react';

// interface MousePosition {
//   x: number;
//   y: number;
// }

export function useMousePosition(enabled: boolean = true): void {
  useEffect(() => {
    if (!enabled || window.innerWidth < 1024) return;

    let ticking = false;

    const handleMouseMove = (e: MouseEvent): void => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
          document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    document.documentElement.style.setProperty('--mouse-x', '0px');
    document.documentElement.style.setProperty('--mouse-y', '0px');

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.style.removeProperty('--mouse-x');
      document.documentElement.style.removeProperty('--mouse-y');
    };
  }, [enabled]);
}