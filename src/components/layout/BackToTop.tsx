import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SPACING } from "@/constants/theme";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.scrollY > SPACING.scroll.threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-500 ease-in-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12 pointer-events-none"
      )}
    >
      <Button
        size="icon"
        onClick={scrollToTop}
        className="rounded-full h-12 w-12 shadow-xl border border-white/20 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" strokeWidth={2.5} />
      </Button>
    </div>
  );
};
