"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        zIndex: 2,
        left: position.x - 250,
        top: position.y - 250,
        width: 500,
        height: 500,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)",
        transition: "left 0.1s ease-out, top 0.1s ease-out",
        willChange: "left, top",
      }}
    />
  );
}
