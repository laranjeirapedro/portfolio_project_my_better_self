import { useEffect, useState, useMemo } from "react";
import { breakpoints } from "../constants";

export const useBreakpoints = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isDesktop = useMemo(() => width > breakpoints.tablet, [width]);
  const isTablet = useMemo(
    () => width > breakpoints.mobile && width <= breakpoints.tablet,
    [width]
  );
  const isMobile = useMemo(() => width <= breakpoints.mobile, [width]);

  return {
    width,
    isDesktop,
    isTablet,
    isMobile,
  };
};
