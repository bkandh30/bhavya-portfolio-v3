import type React from "react";

export const SkipToContent = () => {
  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className="skip-to-content"
      style={{
        position: "absolute",
        left: "-9999px",
        zIndex: 999,
        padding: "1rem 1.5rem",
        backgroundColor: "#c96442",
        color: "white",
        textDecoration: "none",
        borderRadius: "0.5rem",
        fontWeight: 600,
        fontSize: "0.875rem",
        transition: "all 0.2s ease",
      }}
      onFocus={(e) => {
        e.currentTarget.style.left = "1rem";
        e.currentTarget.style.top = "1rem";
      }}
      onBlur={(e) => {
        e.currentTarget.style.left = "-9999px";
      }}
    >
      Skip to main content
    </a>
  );
};
