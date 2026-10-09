"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  { text: "> Initializing system...", delay: 0 },
  { text: "> Loading modules... ██████████ 100%", delay: 200 },
  { text: "> Compiling components...", delay: 450 },
  { text: "> Welcome, Gowthamraj G", delay: 700 },
  { text: "> Portfolio loaded successfully.", delay: 950 },
];

export default function LoadingScreen() {
  // Use lazy initial state function to avoid synchronous setState inside useEffect
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const alreadyBooted = sessionStorage.getItem("portfolio_booted");
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      return !(alreadyBooted || prefersReduced);
    } catch {
      return true;
    }
  });

  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showCursor, setShowCursor] = useState(true);

  const finishBoot = useCallback(() => {
    try {
      sessionStorage.setItem("portfolio_booted", "true");
    } catch {
      // Handle private browsing storage errors
    }
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Show lines progressively (Total time ~1.2s)
    const timers: NodeJS.Timeout[] = [];
    BOOT_LINES.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
      timers.push(timer);
    });

    // Hide loading screen after 1400ms total
    const hideTimer = setTimeout(() => {
      finishBoot();
    }, 1400);
    timers.push(hideTimer);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);

    // Skippable on key press
    const handleKeyDown = () => {
      finishBoot();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(cursorInterval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, finishBoot]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loading-screen cursor-pointer"
          onClick={finishBoot}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-label="System Initialization Terminal (Click or press any key to skip)"
          role="button"
          tabIndex={0}
        >
          <div className="w-full max-w-lg px-6">
            {/* Terminal header */}
            <div className="glass rounded-t-xl px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-text-muted font-mono">
                  terminal — portfolio
                </span>
              </div>
              <span className="text-[10px] text-text-muted font-mono opacity-70">
                [Click to skip]
              </span>
            </div>

            {/* Terminal body */}
            <div className="glass-strong rounded-b-xl p-5 font-mono text-xs sm:text-sm min-h-[200px] flex flex-col justify-between">
              <div className="space-y-2">
                {BOOT_LINES.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -8 }}
                    animate={
                      visibleLines.includes(index)
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -8 }
                    }
                    transition={{ duration: 0.15 }}
                  >
                    {index === 3 ? (
                      <span className="text-accent font-semibold">{line.text}</span>
                    ) : index === 4 ? (
                      <span className="text-green-400 font-medium">{line.text}</span>
                    ) : (
                      <span className="text-text-secondary">{line.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Blinking cursor & skip hint */}
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-border-subtle/40">
                <span
                  className="inline-block w-2.5 h-4 bg-primary"
                  style={{
                    opacity: showCursor ? 1 : 0,
                    verticalAlign: "middle",
                  }}
                />
                <span className="text-[11px] text-text-muted font-mono">
                  Press any key to enter
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
