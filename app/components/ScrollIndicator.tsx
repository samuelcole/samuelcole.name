"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";

export default function ScrollIndicator() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeDistance = 300; // Distance to fade out completely
      const opacity = Math.max(0, 1 - scrollPosition / fadeDistance);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.scroll} style={{ opacity: scrollOpacity }}>
      <p>scroll plz ↓</p>
    </div>
  );
}
