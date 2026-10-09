"use client";

import { useEffect, useState } from "react";
import { FLOATING_SNIPPETS } from "@/lib/constants";

interface FloatingItem {
  id: number;
  text: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

const COLORS = [
  "rgba(59, 130, 246, 0.12)",
  "rgba(139, 92, 246, 0.10)",
  "rgba(6, 182, 212, 0.10)",
  "rgba(34, 197, 94, 0.08)",
  "rgba(251, 191, 36, 0.08)",
];

function generateItems(count: number): FloatingItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    text: FLOATING_SNIPPETS[Math.floor(Math.random() * FLOATING_SNIPPETS.length)],
    x: Math.random() * 100,
    y: Math.random() * 100 + 100,
    size: Math.random() * 4 + 10,
    duration: Math.random() * 30 + 40,
    delay: Math.random() * 20,
    opacity: Math.random() * 0.08 + 0.04,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));
}

export default function FloatingCode() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const frameId = requestAnimationFrame(() => {
      setItems(generateItems(25));
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {items.map((item) => (
        <div
          key={item.id}
          className="floating-snippet"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
            color: item.color,
            animation: `snippet-float ${item.duration}s linear ${item.delay}s infinite`,
            opacity: item.opacity,
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
