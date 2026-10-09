/**
 * EXPANDABLE PROJECT FEATURES (js/projects.js)
 * Toggles collapsible feature items in project cards.
 */

function toggleProjectFeatures(button) {
  const card = button.closest(".glow-card");
  if (!card) return;

  const extraFeatures = card.querySelectorAll(".extra-feature");
  const isExpanded = button.getAttribute("data-expanded") === "true";

  if (isExpanded) {
    extraFeatures.forEach((el) => (el.style.display = "none"));
    button.setAttribute("data-expanded", "false");
    button.innerHTML = `+${extraFeatures.length} More <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline ml-1"><path d="M6 9l6 6 6-6"/></svg>`;
  } else {
    extraFeatures.forEach((el) => (el.style.display = "flex"));
    button.setAttribute("data-expanded", "true");
    button.innerHTML = `Show Less <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline ml-1"><path d="M18 15l-6-6-6 6"/></svg>`;
  }
}
