/**
 * CANVAS MATRIX RAIN ANIMATION (js/backgrounds/matrix.js)
 */

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.getElementById("matrix-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const chars = "01アイウエオカキクケコ{}()<>/=;#$@!%&*+-[]|~^_.,:;?";
  const charArray = chars.split("");
  const fontSize = 14;
  const columns = Math.floor(width / fontSize);
  const drops = new Array(columns).fill(1).map(() => Math.random() * -100);

  let lastTime = 0;
  const fps = 24;
  const interval = 1000 / fps;

  function draw(timestamp) {
    if (timestamp - lastTime >= interval) {
      lastTime = timestamp;

      ctx.fillStyle = "rgba(5, 8, 22, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const choice = Math.random();
        if (choice > 0.97) ctx.fillStyle = "rgba(59, 130, 246, 0.8)";
        else if (choice > 0.94) ctx.fillStyle = "rgba(6, 182, 212, 0.7)";
        else if (choice > 0.91) ctx.fillStyle = "rgba(139, 92, 246, 0.6)";
        else ctx.fillStyle = "rgba(59, 130, 246, 0.15)";

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
    }
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
});
