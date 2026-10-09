/**
 * FLOATING CODE SNIPPETS (js/backgrounds/floating.js)
 */

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const container = document.getElementById("floating-snippets-container");
  if (!container) return;

  const snippets = [
    "const dev = 'Gowthamraj G';",
    "function WebDev()",
    "console.log('Hello World');",
    "python script.py",
    "int main() { return 0; }",
    "public class Main {}",
    "display: flex;",
    "<Navbar />",
    "git push origin main",
    "SELECT * FROM projects;",
    "{ title: 'OD Application' }",
    "gradient-text",
    "node server.js",
    "mailto:gowthamrajg2006@gmail.com"
  ];

  const colors = [
    "rgba(59, 130, 246, 0.12)",
    "rgba(139, 92, 246, 0.10)",
    "rgba(6, 182, 212, 0.10)",
    "rgba(34, 197, 94, 0.08)"
  ];

  for (let i = 0; i < 22; i++) {
    const el = document.createElement("div");
    el.className = "floating-snippet";
    el.textContent = snippets[Math.floor(Math.random() * snippets.length)];
    
    const x = Math.random() * 100;
    const y = Math.random() * 100 + 100;
    const size = Math.random() * 4 + 10;
    const duration = Math.random() * 30 + 35;
    const delay = Math.random() * 15;
    const color = colors[Math.floor(Math.random() * colors.length)];

    el.style.left = `${x}%`;
    el.style.top = `${y}%`;
    el.style.fontSize = `${size}px`;
    el.style.color = color;
    el.style.animation = `snippet-float ${duration}s linear ${delay}s infinite`;

    container.appendChild(el);
  }
});
