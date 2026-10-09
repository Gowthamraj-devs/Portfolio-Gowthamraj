/**
 * GOWTHAMRAJ G — MAIN JS APPLICATION ENTRY (js/main.js)
 * Populates skills, services, projects, experiences, and education dynamically into HTML.
 */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderServices();
  renderProjects();
  renderExperiences();
  renderEducation();
  renderCertificates();
});

// 1. Render Skills Section
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container || typeof SKILL_CATEGORIES === "undefined") return;

  const icons = {
    frontend: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>`,
    backend: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    database: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    tool: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`
  };

  container.innerHTML = SKILL_CATEGORIES.map((cat, idx) => {
    const categorySkills = SKILLS.filter((s) => s.category === cat.key);
    return `
      <div class="reveal ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}">
        <div class="glass rounded-2xl p-6 hover-glow neon-border h-full flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 rounded-xl" style="background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))">
                <span class="text-primary">${icons[cat.key] || icons.frontend}</span>
              </div>
              <div>
                <h3 class="text-lg font-bold text-text-primary">${cat.label}</h3>
                <span class="text-xs text-text-muted font-mono">${categorySkills.length} technologies</span>
              </div>
            </div>
            <div class="flex flex-wrap gap-3">
              ${categorySkills.map((skill) => `
                <div class="px-4 py-2.5 rounded-xl glass border border-primary/20 hover:border-primary/50 text-text-primary font-medium text-sm flex items-center gap-2 shadow-sm transition-colors cursor-default">
                  <span class="w-2 h-2 rounded-full bg-primary"></span>
                  ${skill.name}
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// 2. Render Services Section
function renderServices() {
  const container = document.getElementById("services-container");
  if (!container || typeof SERVICES === "undefined") return;

  const glowColors = ["blue", "purple", "cyan", "blue"];

  container.innerHTML = SERVICES.map((service, idx) => `
    <div class="reveal">
      <div class="glow-card glass h-full flex flex-col justify-between" data-glow="${glowColors[idx % glowColors.length]}">
        <div>
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 rounded-xl shrink-0" style="background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-text-primary">${service.title}</h3>
          </div>
          <p class="text-text-secondary text-sm leading-relaxed mb-6">${service.description}</p>
          <div class="space-y-2 mb-6">
            ${service.features.map((feat) => `
              <div class="flex items-center gap-2 text-xs sm:text-sm font-medium text-text-secondary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                <span>${feat}</span>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="pt-4 border-t border-border-subtle">
          <a href="#contact" class="inline-flex items-center gap-2 text-xs font-mono text-primary hover:text-accent transition-colors">
            Inquire about this service <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

// 3. Render Projects Section
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container || typeof PROJECTS === "undefined") return;

  container.innerHTML = PROJECTS.map((project, idx) => {
    const hasMore = project.features.length > 4;
    const initialFeatures = project.features.slice(0, 4);
    const extraFeatures = project.features.slice(4);

    return `
      <div class="reveal">
        <div class="glow-card glass h-full flex flex-col justify-between" data-glow="${project.featured ? "blue" : idx === 1 ? "cyan" : "purple"}">
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <div class="flex items-center gap-2">
                ${project.featured ? `
                  <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-primary/20 text-primary border border-primary/40 shadow-sm">
                    ★ FEATURED
                  </span>
                ` : ''}
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                  project.status === "ongoing"
                    ? "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                    : "bg-green-500/15 text-green-400 border border-green-500/20"
                }">
                  ${project.status === "ongoing" ? "In Progress" : "Completed"}
                </span>
              </div>
              <span class="text-text-muted text-xs font-mono">${project.year}</span>
            </div>

            <div class="relative rounded-xl overflow-hidden mb-5 border border-border-subtle bg-slate-950/80 p-4 aspect-[16/9] flex flex-col justify-between">
              <div class="flex items-center justify-between text-xs text-text-muted font-mono border-b border-white/5 pb-2">
                <span class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-primary/70 inline-block"></span>
                  ${project.title.toLowerCase().replace(/\s+/g, "-")}.app
                </span>
                <span>${project.stack[0]}</span>
              </div>
              <div class="my-auto py-2">
                <p className="text-xs text-text-secondary font-mono leading-relaxed">
                  <span class="text-primary font-bold">&gt;</span> ${project.problem}
                </p>
              </div>
              <div class="flex items-center justify-between text-[11px] text-text-muted font-mono pt-2 border-t border-white/5">
                <span class="text-accent">${project.stack.slice(0, 3).join(" • ")}</span>
              </div>
            </div>

            <h3 class="text-xl font-bold text-text-primary mb-2">${project.title}</h3>
            <p class="text-text-secondary text-sm leading-relaxed mb-4">${project.description}</p>

            <div class="space-y-2 mb-4 p-3 rounded-xl glass-strong border border-border-subtle text-xs">
              <div>
                <span class="font-mono text-primary font-semibold">Problem: </span>
                <span class="text-text-secondary">${project.problem}</span>
              </div>
              <div>
                <span class="font-mono text-accent font-semibold">Solution: </span>
                <span class="text-text-secondary">${project.solution}</span>
              </div>
            </div>

            <div class="mb-4 text-xs font-mono text-text-muted space-y-1">
              <div>
                <span class="text-text-secondary font-medium">Role: </span>
                <span>${project.role}</span>
              </div>
              ${project.impact ? `
                <div>
                  <span class="text-text-secondary font-medium">Impact: </span>
                  <span>${project.impact}</span>
                </div>
              ` : ''}
            </div>

            <div class="flex flex-wrap gap-1.5 mb-5">
              ${project.stack.map((tech) => `
                <span class="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-primary/10 text-primary border border-primary/20">${tech}</span>
              `).join("")}
            </div>

            <div class="mb-6">
              <div class="flex items-center justify-between mb-2">
                <p class="text-xs font-mono text-text-muted">// Key Features</p>
                ${hasMore ? `
                  <button onclick="toggleProjectFeatures(this)" data-expanded="false" class="text-[11px] font-mono text-primary hover:underline cursor-pointer">
                    +${extraFeatures.length} More
                  </button>
                ` : ''}
              </div>
              <div class="space-y-1.5">
                ${initialFeatures.map((feat) => `
                  <div class="flex items-start gap-1.5 text-text-secondary text-xs">
                    <span class="text-accent mt-0.5 shrink-0">▹</span>
                    <span>${feat}</span>
                  </div>
                `).join("")}
                ${extraFeatures.map((feat) => `
                  <div class="extra-feature items-start gap-1.5 text-text-secondary text-xs" style="display: none;">
                    <span class="text-accent mt-0.5 shrink-0">▹</span>
                    <span>${feat}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border-subtle mt-auto">
            ${project.live ? `
              <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white transition-transform hover:scale-105" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); boxShadow: 0 0 12px rgba(59, 130, 246, 0.3)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                ${project.liveLabel || "Live Demo"}
              </a>
            ` : `
              <span class="text-[11px] font-mono text-text-muted italic">Internal Project</span>
            `}

            ${project.github ? `
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary glass transition-transform hover:scale-105">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub Repo
              </a>
            ` : project.repoAvailableOnRequest ? `
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono text-text-muted glass border border-border-subtle opacity-80">
                🔒 Repo available on request
              </span>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// 4. Render Experiences
function renderExperiences() {
  const container = document.getElementById("experience-container");
  if (!container || typeof EXPERIENCES === "undefined") return;

  container.innerHTML = EXPERIENCES.map((exp) => `
    <div class="reveal">
      <div class="relative pl-10 md:pl-0 mb-10 last:mb-0">
        <div class="timeline-dot"></div>
        <div class="md:ml-[calc(50%+2rem)]">
          <div class="glow-card glass" data-glow="cyan">
            <div class="flex items-start gap-3 mb-3">
              <div class="p-2.5 rounded-xl shrink-0" style="background: linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.15))">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-accent"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-text-primary">${exp.role}</h3>
                <p class="text-primary font-medium text-sm">${exp.company}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-4 mb-4 text-xs text-text-muted font-mono">
              <span>📅 ${exp.period} (${exp.duration})</span>
              <span>📍 ${exp.location}</span>
            </div>
            <ul class="space-y-2">
              ${exp.points.map((pt) => `
                <li class="flex items-start gap-2 text-text-secondary text-xs sm:text-sm leading-relaxed">
                  <span class="text-accent mt-1 shrink-0">▹</span>
                  <span>${pt}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// 5. Render Education
function renderEducation() {
  const container = document.getElementById("education-container");
  if (!container || typeof EDUCATION === "undefined") return;

  container.innerHTML = EDUCATION.map((edu) => `
    <div class="reveal">
      <div class="relative pl-10 md:pl-0 mb-10 last:mb-0">
        <div class="timeline-dot" style="background: var(--color-secondary); box-shadow: 0 0 12px rgba(139, 92, 246, 0.6)"></div>
        <div class="md:ml-[calc(50%+2rem)]">
          <div class="glow-card glass" data-glow="purple">
            <div class="flex items-start gap-3 mb-3">
              <div class="p-2.5 rounded-xl shrink-0" style="background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.15))">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-secondary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-text-primary">${edu.degree}</h3>
                <p class="text-secondary font-medium text-sm">${edu.institution}</p>
              </div>
            </div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-secondary/15 text-secondary border border-secondary/20 mb-3">
              📈 ${edu.status}
            </div>
            <div class="flex flex-wrap gap-4 mb-3 text-xs text-text-muted font-mono">
              <span>📅 ${edu.period}</span>
              <span>📍 ${edu.location}</span>
            </div>
            ${edu.aggregate ? `
              <div class="flex items-center gap-2 mt-3 pt-3 border-t border-border-subtle">
                <span class="text-text-muted text-xs font-mono">academic record:</span>
                <span class="text-accent font-medium text-xs sm:text-sm">${edu.aggregate}</span>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// 6. Render Certificates
function renderCertificates() {
  const container = document.getElementById("certificates-container");
  if (!container || typeof CERTIFICATES === "undefined") return;

  container.innerHTML = CERTIFICATES.map((cert) => `
    <div class="reveal">
      <div class="glow-card glass" data-glow="cyan">
        <div class="flex items-start gap-4">
          <div class="p-3 rounded-xl shrink-0" style="background: linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.15))">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-accent"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>
          </div>
          <div class="flex-1">
            <h3 class="text-base sm:text-lg font-bold text-text-primary mb-1">${cert.title}</h3>
            <div class="flex flex-wrap gap-4 text-xs sm:text-sm text-text-secondary">
              <span>🏢 ${cert.issuer}</span>
              ${cert.year ? `<span class="font-mono text-xs">📅 ${cert.year}</span>` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}
