import { useState, useEffect } from "react";

const BREAKPOINT = 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
