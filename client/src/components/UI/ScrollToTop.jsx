import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current === pathname || hash) {
      prevPathnameRef.current = pathname;
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    prevPathnameRef.current = pathname;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
