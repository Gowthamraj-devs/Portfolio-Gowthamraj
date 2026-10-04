"use client";

import { motion } from "framer-motion";
import { ExternalLink, Construction, CheckCircle2, Globe } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";
import SectionReveal from "@/components/SectionReveal";
import GlowCard from "@/components/GlowCard";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <SectionReveal>
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">// MY WORK</p>
          <h2 className="section-title gradient-text">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Real-world applications and responsive website solutions I&apos;ve designed and developed.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 0.15}>
              <GlowCard
                glowColor={index === 0 ? "blue" : index === 1 ? "cyan" : "purple"}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  {/* Status badge & Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "ongoing"
                          ? "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                          : "bg-green-500/15 text-green-400 border border-green-500/20"
                      }`}
                    >
                      {project.status === "ongoing" ? (
                        <Construction size={12} />
                      ) : (
                        <CheckCircle2 size={12} />
                      )}
                      {project.status === "ongoing" ? "In Progress" : "Completed"}
                    </div>
                    <span className="text-text-muted text-xs font-mono">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features List */}
                  <div className="mb-6">
                    <p className="text-xs font-mono text-text-muted mb-2">// Key Features</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-1.5 text-text-secondary text-xs"
                        >
                          <span className="text-accent mt-0.5">▹</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links / Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle mt-auto">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                        boxShadow: "0 0 12px rgba(59, 130, 246, 0.3)",
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Globe size={14} />
                      {project.liveLabel || "Live Demo"}
                    </motion.a>
                  )}

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary glass transition-all duration-300"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(59,130,246,0.2)",
                      }}
                    >
                      <Github size={14} />
                      GitHub Repo
                    </motion.a>
                  )}
                </div>
              </GlowCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
