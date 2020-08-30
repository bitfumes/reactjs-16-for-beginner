import React, { useState, useEffect } from "react";

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(null);

  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}
