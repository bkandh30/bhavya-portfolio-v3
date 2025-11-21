import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export function usePerformanceMonitor(): void {
  useEffect(() => {
    if (import.meta.env.DEV) return;

    const metrics: PerformanceMetrics = {};

    const paintObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime;
          console.log(`FCP: ${entry.startTime.toFixed(2)}ms`);
        }
      }
    });

    try {
      paintObserver.observe({ type: 'paint', buffered: true });
    } catch (e) {
      // Paint timing not supported
    }

    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
        renderTime?: number;
        loadTime?: number;
      };
      
      metrics.lcp = lastEntry.renderTime || lastEntry.loadTime || 0;
      console.log(`LCP: ${metrics.lcp.toFixed(2)}ms`);
    });

    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      // LCP not supported
    }

    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as PerformanceEntry & {
          processingStart?: number;
        };
        
        metrics.fid = fidEntry.processingStart 
          ? fidEntry.processingStart - entry.startTime 
          : 0;
        console.log(`FID: ${metrics.fid.toFixed(2)}ms`);
      }
    });

    try {
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (e) {
      // FID not supported
    }

    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as PerformanceEntry & {
          hadRecentInput?: boolean;
          value?: number;
        };
        
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
        }
      }
      metrics.cls = clsValue;
      console.log(`CLS: ${clsValue.toFixed(4)}`);
    });

    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      // CLS not supported
    }

    const navTiming = performance.getEntriesByType('navigation')[0] as 
      PerformanceNavigationTiming | undefined;
    
    if (navTiming) {
      metrics.ttfb = navTiming.responseStart - navTiming.requestStart;
      console.log(`TTFB: ${metrics.ttfb.toFixed(2)}ms`);
    }

    window.addEventListener('load', () => {
      setTimeout(() => {
        console.log('Performance Metrics:', metrics);
      }, 0);
    });

    return () => {
      paintObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);
}