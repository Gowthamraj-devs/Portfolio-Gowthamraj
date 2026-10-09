/**
 * NAVBAR & MOBILE MENU HANDLER (js/navbar.js)
 * Manages scroll direction, active section observer, scroll progress bar, and mobile menu drawer.
 */

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const progressBar = document.getElementById("scroll-progress-bar");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileOverlay = document.getElementById("mobile-menu-overlay");
  const mobileClose = document.getElementById("mobile-menu-close");
  const navLinks = document.querySelectorAll(".nav-link");

  let lastScrollY = window.scrollY;
  let ticking = false;

  // 1. Scroll Direction & Progress Bar
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Add scrolled background glass class
        if (currentY > 40) {
          navbar.classList.add("nav-scrolled");
        } else {
          navbar.classList.remove("nav-scrolled");
        }

        // Hide on scroll down (>150px), show on scroll up
        if (currentY > 150 && currentY > lastScrollY + 5) {
          navbar.classList.add("nav-hidden");
        } else if (currentY < lastScrollY - 5) {
          navbar.classList.remove("nav-hidden");
        }

        // Scroll progress bar
        if (progressBar && totalHeight > 0) {
          const progress = Math.min(Math.max(currentY / totalHeight, 0), 1);
          progressBar.style.transform = `scaleX(${progress})`;
        }

        lastScrollY = currentY;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // 2. IntersectionObserver for Active Section
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "-70px 0px -40% 0px"
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${id}`) {
            link.classList.add("text-primary");
            link.classList.remove("text-text-secondary");
            // Render active dot
            let dot = link.querySelector(".active-nav-dot");
            if (!dot) {
              dot = document.createElement("span");
              dot.className = "active-nav-dot";
              link.appendChild(dot);
            }
          } else {
            link.classList.remove("text-primary");
            link.classList.add("text-text-secondary");
            const dot = link.querySelector(".active-nav-dot");
            if (dot) dot.remove();
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => sectionObserver.observe(sec));

  // 3. Mobile Menu Drawer Handler
  function openMobileMenu() {
    mobileOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (mobileToggle) mobileToggle.addEventListener("click", openMobileMenu);
  if (mobileClose) mobileClose.addEventListener("click", closeMobileMenu);
  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", (e) => {
      if (e.target === mobileOverlay) closeMobileMenu();
    });
  }

  // Close mobile drawer when clicking any link
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Close on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("active")) {
      closeMobileMenu();
    }
  });
});
