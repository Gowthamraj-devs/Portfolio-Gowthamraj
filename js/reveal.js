/**
 * SCROLL REVEAL OBSERVER (js/reveal.js)
 * Native IntersectionObserver to activate scroll reveal transitions.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("active"));
    return;
  }

  const revealElements = document.querySelectorAll(".reveal");
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "-40px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Reveal once
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => revealObserver.observe(el));
});
