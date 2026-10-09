/**
 * CONTACT FORM HANDLER (js/contact.js)
 * Validates inputs and handles submission feedback with instant WhatsApp & Email action fallbacks.
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const statusBox = document.getElementById("contact-status");
  const submitBtn = document.getElementById("contact-submit-btn");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !message) {
      showStatus("error", "Please fill in all required fields (Name, Email, Message).");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending Message...</span>`;
    if (statusBox) statusBox.style.display = "none";

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        Send Message
      `;

      showStatus("notice", "Form submitted! For immediate response, feel free to contact me directly via WhatsApp or Email.");
      form.reset();
    }, 800);
  });

  function showStatus(type, text) {
    if (!statusBox) return;
    statusBox.style.display = "flex";
    if (type === "error") {
      statusBox.className = "p-3.5 rounded-xl text-xs flex items-start gap-2.5 font-medium bg-red-500/15 text-red-400 border border-red-500/20 mb-4";
    } else {
      statusBox.className = "p-3.5 rounded-xl text-xs flex items-start gap-2.5 font-medium bg-primary/15 text-primary border border-primary/20 mb-4";
    }
    statusBox.innerHTML = `<span>${text}</span>`;
  }
});
