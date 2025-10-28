import { useEffect, useState } from "react";

const useScrollDirection = (threshold = 10) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const diff = scrollY - lastScrollY;

      if (Math.abs(diff) > threshold) {
        setScrollDirection(diff > 0 ? "down" : "up");
        lastScrollY = scrollY > 0 ? scrollY : 0;
      }
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [threshold]);

  return scrollDirection;
};

export default useScrollDirection;
