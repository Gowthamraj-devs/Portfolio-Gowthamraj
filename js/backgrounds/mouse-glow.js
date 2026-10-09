/**
 * MOUSE GLOW EFFECT (js/backgrounds/mouse-glow.js)
 * Follows mouse cursor using GPU translate3d.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const glowEl = document.getElementById("mouse-glow-element");
  if (!glowEl) return;

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX - 250;
    const y = e.clientY - 250;
    glowEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, { passive: true });
});
