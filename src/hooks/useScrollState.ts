import { useEffect, useState } from "react";

export interface ScrollState {
  scrollY: number;
  viewportHeight: number;
}

const DEFAULT_STATE: ScrollState = {
  scrollY: 0,
  viewportHeight: 0,
};

let currentState: ScrollState = DEFAULT_STATE;
let isListening = false;
let ticking = false;
const subscribers = new Set<(state: ScrollState) => void>();

const getScrollState = (): ScrollState => {
  if (typeof window === "undefined") {
    return DEFAULT_STATE;
  }

  return {
    scrollY: window.scrollY,
    viewportHeight: window.innerHeight,
  };
};

const notifySubscribers = (): void => {
  currentState = getScrollState();
  subscribers.forEach((subscriber) => subscriber(currentState));
};

const handleScroll = (): void => {
  if (!ticking) {
    ticking = true;
    window.requestAnimationFrame(() => {
      notifySubscribers();
      ticking = false;
    });
  }
};

const startListening = (): void => {
  if (isListening || typeof window === "undefined") return;

  isListening = true;
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);
  notifySubscribers();
};

const stopListening = (): void => {
  if (!isListening || typeof window === "undefined") return;

  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleScroll);
  isListening = false;
};

const subscribe = (subscriber: (state: ScrollState) => void): (() => void) => {
  subscribers.add(subscriber);

  if (subscribers.size === 1) {
    startListening();
  } else {
    subscriber(currentState);
  }

  return () => {
    subscribers.delete(subscriber);
    if (subscribers.size === 0) {
      stopListening();
    }
  };
};

export function useScrollState(): ScrollState {
  const [state, setState] = useState<ScrollState>(currentState);

  useEffect(() => {
    if (typeof window === "undefined") return;
    return subscribe(setState);
  }, []);

  return state;
}
