/**
 * ROTATING ROLE TYPEWRITER (js/typewriter.js)
 * Rotates roles dynamically with typing and deleting effect.
 */

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("typewriter-text");
  if (!element) return;

  const roles = (typeof PERSONAL !== "undefined" && PERSONAL.roles) ? PERSONAL.roles : [
    "Backend Developer",
    "Python Developer",
    "Software Developer Trainee",
    "Web Developer"
  ];

  let roleIndex = 0;
  let charIndex = roles[0].length; // Start with first full word for instant display
  let isDeleting = false;
  const typingSpeed = 40;
  const deletingSpeed = 30;
  const pauseDuration = 2000;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      element.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      element.textContent = currentRole.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, pauseDuration);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
  }

  // Start rotation after initial pause
  setTimeout(type, pauseDuration);
});
