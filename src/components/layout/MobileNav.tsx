import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const TOGGLE_BUTTON_ID = "mobile-navigation-toggle";

export const MobileNav = ({
  activeSection,
  scrollToSection,
}: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const getFocusableElements = useCallback((): HTMLElement[] => {
    if (!dialogRef.current) return [];
    const elements = dialogRef.current.querySelectorAll<HTMLElement>(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );

    return Array.from(elements).filter(
      (element) =>
        !element.hasAttribute("disabled") && !element.getAttribute("aria-hidden")
    );
  }, []);

  useEffect(() => {
    if (!isOpen) {
      const toggleButton = document.getElementById(TOGGLE_BUTTON_ID);
      toggleButton?.focus();
      return;
    }

    const focusables = getFocusableElements();
    const target = focusables[0] ?? dialogRef.current;
    target?.focus();
  }, [isOpen, getFocusableElements]);

  const handleDialogKeyDown = useCallback((
    event: React.KeyboardEvent<HTMLDivElement>
  ): void => {
    if (!isOpen) return;

    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      return;
    }

    if (event.key !== "Tab") return;

    const focusables = getFocusableElements();
    if (focusables.length === 0) {
      event.preventDefault();
      dialogRef.current?.focus();
      return;
    }

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (!active || !dialogRef.current?.contains(active)) {
      event.preventDefault();
      first.focus();
      return;
    }

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }, [getFocusableElements, isOpen]);

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <>
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <Button
          size="icon"
          className="rounded-full h-13 w-13 border-2 border-white/20 shadow-2xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-110 active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          id={TOGGLE_BUTTON_ID}
        >
          {isOpen ? (
            <X className="h-7 w-7" strokeWidth={2.5} aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" strokeWidth={2.5} aria-hidden="true" />
          )}
        </Button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm lg:hidden flex items-center justify-center transition-all duration-300 ease-in-out overscroll-contain",
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        tabIndex={-1}
        ref={dialogRef}
        onKeyDown={handleDialogKeyDown}
      >
        <nav
          className="flex flex-col items-center gap-8 p-4"
          aria-label="Main navigation"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                scrollToSection(section.id);
                setIsOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  scrollToSection(section.id);
                  setIsOpen(false);
                }
              }}
              className={cn(
                "text-3xl font-medium tracking-widest uppercase transition-all duration-200 hover:scale-110",
                activeSection === section.id
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={activeSection === section.id ? "page" : undefined}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
