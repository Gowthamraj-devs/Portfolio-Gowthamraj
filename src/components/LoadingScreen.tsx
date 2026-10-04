"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  { text: "> Initializing system...", delay: 0 },
  { text: "> Loading modules... ████████████████ 100%", delay: 400 },
  { text: "> Connecting to server...", delay: 800 },
  { text: "> Compiling components...", delay: 1200 },
  { text: "> Fetching portfolio data...", delay: 1600 },
  { text: "> Welcome, Gowtham Raj", delay: 2000 },
  { text: "> Portfolio loaded successfully.", delay: 2400 },
  { text: "", delay: 2800 },
];

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Show lines progressively
    BOOT_LINES.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
    });

    // Hide loading screen
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(hideTimer);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-full max-w-xl px-6">
            {/* Terminal header */}
            <div className="glass rounded-t-xl px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-sm text-text-muted font-mono">
                terminal — portfolio
              </span>
            </div>

            {/* Terminal body */}
            <div className="glass-strong rounded-b-xl p-6 font-mono text-sm min-h-[260px]">
              {BOOT_LINES.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    visibleLines.includes(index)
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.2 }}
                  className="mb-1.5"
                >
                  {index === 5 ? (
                    <span className="text-accent">{line.text}</span>
                  ) : index === 6 ? (
                    <span className="text-green-400">{line.text}</span>
                  ) : (
                    <span className="text-text-secondary">{line.text}</span>
                  )}
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <span
                className="inline-block w-2.5 h-5 bg-primary"
                style={{
                  opacity: showCursor ? 1 : 0,
                  verticalAlign: "text-bottom",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
