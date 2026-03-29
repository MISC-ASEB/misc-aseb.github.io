import { useState, useEffect } from "react";
import { ArrowUpFilled } from "@fluentui/react-icons";

/**
 * ScrollToTop Component
 *
 * A floating action button that appears when the user scrolls down.
 * Clicking it smoothly scrolls the page back to the top.
 * Styled as a premium glassmorphic circle to match the MISC 2.0 theme.
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-4 rounded-full z-50 transition-all duration-500 transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-90 pointer-events-none"
      } glass-card hover:bg-misc-blue hover:border-misc-blue group shadow-xl shadow-misc-blue/20`}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUpFilled className="text-2xl text-misc-blue dark:text-misc-lightBlue group-hover:text-white transition-colors duration-300" />
    </button>
  );
};

export default ScrollToTop;
