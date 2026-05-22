// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the browser to snap to X: 0, Y: 0 instantly
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render any HTML, it just runs logic in the background
  return null; 
}