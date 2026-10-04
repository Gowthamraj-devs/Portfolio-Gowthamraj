"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const chars = "01アイウエオカキクケコ{}()<>/=;#$@!%&*+-[]|~^_.,:;?";
    const charArray = chars.split("");
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    // Randomize initial positions
    for (let i = 0; i < drops.length; i++) {
      drops[i] = Math.random() * -100;
    }

    function draw() {
      if (!ctx || !canvas) return;

      // Fade effect
      ctx.fillStyle = "rgba(5, 8, 22, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Color variation
        const colorChoice = Math.random();
        if (colorChoice > 0.97) {
          ctx.fillStyle = "rgba(59, 130, 246, 0.8)"; // Blue highlight
        } else if (colorChoice > 0.94) {
          ctx.fillStyle = "rgba(6, 182, 212, 0.7)"; // Cyan highlight
        } else if (colorChoice > 0.91) {
          ctx.fillStyle = "rgba(139, 92, 246, 0.6)"; // Purple
        } else {
          ctx.fillStyle = "rgba(59, 130, 246, 0.15)"; // Dim blue
        }

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5; // Slow fall speed
      }

      animationId = requestAnimationFrame(draw);
    }

    // Throttle to ~24fps for performance
    let lastTime = 0;
    const fps = 24;
    const interval = 1000 / fps;

    function throttledDraw(timestamp: number) {
      if (timestamp - lastTime >= interval) {
        lastTime = timestamp;
        draw();
      }
      animationId = requestAnimationFrame(throttledDraw);
    }

    animationId = requestAnimationFrame(throttledDraw);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.4 }}
    />
  );
}
