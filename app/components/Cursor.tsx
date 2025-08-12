"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleHoverEnter = () => setIsHovering(true);
    const handleHoverLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", moveCursor);

    const hoverTargets = document.querySelectorAll(".cursor-hover-target");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverEnter);
      el.addEventListener("mouseleave", handleHoverLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverEnter);
        el.removeEventListener("mouseleave", handleHoverLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 z-50 pointer-events-none transition-transform duration-200 ease-out
        rounded-full w-6 h-6 ${
          isHovering
            ? "bg-purple-500/30 scale-160"
            : "bg-purple-500/30 scale-100"
        }`}
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
};

export default CustomCursor;
