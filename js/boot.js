/**
 * TERMINAL BOOT SEQUENCE (js/boot.js)
 * Manages the skippable terminal initialization overlay.
 */

document.addEventListener("DOMContentLoaded", () => {
  const bootOverlay = document.getElementById("loading-screen");
  if (!bootOverlay) return;

  // Function to hide the boot screen and save session state
  function finishBoot() {
    try {
      sessionStorage.setItem("portfolio_booted", "true");
    } catch (e) {
      // Storage error fallback
    }
    bootOverlay.classList.add("hidden-boot");
    setTimeout(() => {
      bootOverlay.style.display = "none";
    }, 300);
  }

  // Check if user already saw boot sequence this session or prefers reduced motion
  try {
    const alreadyBooted = sessionStorage.getItem("portfolio_booted");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadyBooted || prefersReduced) {
      bootOverlay.style.display = "none";
      return;
    }
  } catch (e) {
    // Fallback
  }

  // Progressive text line delays (total ~1.2 seconds)
  const lines = document.querySelectorAll(".boot-line");
  const delays = [0, 200, 450, 700, 950];

  lines.forEach((line, idx) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateX(0)";
    }, delays[idx] || idx * 250);
  });

  // Auto-finish boot after 1400ms
  const autoHide = setTimeout(finishBoot, 1400);

  // Skippable on click anywhere or keypress
  bootOverlay.addEventListener("click", () => {
    clearTimeout(autoHide);
    finishBoot();
  });

  window.addEventListener("keydown", function skipOnKey() {
    clearTimeout(autoHide);
    finishBoot();
    window.removeEventListener("keydown", skipOnKey);
  });
});
