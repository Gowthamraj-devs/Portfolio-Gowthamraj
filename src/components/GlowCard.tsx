"use client";

import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "cyan";
}

const glowColors = {
  blue: "rgba(59, 130, 246, 0.15)",
  purple: "rgba(139, 92, 246, 0.15)",
  cyan: "rgba(6, 182, 212, 0.15)",
};

const hoverGlowColors = {
  blue: "0 0 30px rgba(59, 130, 246, 0.2), 0 0 60px rgba(59, 130, 246, 0.1)",
  purple: "0 0 30px rgba(139, 92, 246, 0.2), 0 0 60px rgba(139, 92, 246, 0.1)",
  cyan: "0 0 30px rgba(6, 182, 212, 0.2), 0 0 60px rgba(6, 182, 212, 0.1)",
};

export default function GlowCard({
  children,
  className = "",
  glowColor = "blue",
}: GlowCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 relative overflow-hidden neon-border ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow: hoverGlowColors[glowColor],
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        boxShadow: `0 0 15px ${glowColors[glowColor]}`,
      }}
    >
      {/* Gradient accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-primary), var(--color-secondary), transparent)",
          opacity: 0.6,
        }}
      />
      {children}
    </motion.div>
  );
}
