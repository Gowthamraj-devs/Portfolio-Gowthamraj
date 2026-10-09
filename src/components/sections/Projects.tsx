"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Construction, CheckCircle2, Globe, Star, Lock, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import { PROJECTS, Project } from "@/lib/constants";

export default function Projects() {
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});

  const toggleFeatures = (title: string) => {
    setExpandedFeatures((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <Reveal>
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 tracking-wider uppercase">{"// MY WORK"}</p>
          <h2 className="section-title gradient-text">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Real-world applications and responsive website solutions I&apos;ve designed and developed.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS.map((project: Project, index: number) => {
            const isExpanded = !!expandedFeatures[project.title];
            const visibleFeatures = isExpanded ? project.features : project.features.slice(0, 4);
            const hasMoreFeatures = project.features.length > 4;

            return (
              <Reveal key={project.title} delay={index * 0.12} duration={0.5}>
                <GlowCard
                  glowColor={project.featured ? "blue" : index === 1 ? "cyan" : "purple"}
                  className="h-full flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Featured / Status badge & Year */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-primary/20 text-primary border border-primary/40 shadow-sm">
                            <Star size={10} className="fill-primary" /> FEATURED
                          </span>
                        )}
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                            project.status === "ongoing"
                              ? "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                              : "bg-green-500/15 text-green-400 border border-green-500/20"
                          }`}
                        >
                          {project.status === "ongoing" ? (
                            <Construction size={11} />
                          ) : (
                            <CheckCircle2 size={11} />
                          )}
                          {project.status === "ongoing" ? "In Progress" : "Completed"}
                        </span>
                      </div>
                      <span className="text-text-muted text-xs font-mono">{project.year}</span>
                    </div>

                    {/* Visual Card Image / Fallback Header */}
                    <div className="relative rounded-xl overflow-hidden mb-5 border border-border-subtle bg-slate-950/80 p-4 aspect-[16/9] flex flex-col justify-between group-hover:border-primary/40 transition-colors">
                      <div className="flex items-center justify-between text-xs text-text-muted font-mono border-b border-white/5 pb-2">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-primary/70 inline-block" />
                          {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                        </span>
                        <span>{project.stack[0]}</span>
                      </div>
                      <div className="my-auto py-2">
                        <p className="text-xs text-text-secondary font-mono leading-relaxed line-clamp-2">
                          <span className="text-primary font-bold">&gt;</span> {project.problem}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-text-muted font-mono pt-2 border-t border-white/5">
                        <span className="text-accent">{project.stack.slice(0, 3).join(" • ")}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Overview Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Problem & Solution */}
                    <div className="space-y-2 mb-4 p-3 rounded-xl glass-strong border border-border-subtle text-xs">
                      <div>
                        <span className="font-mono text-primary font-semibold">Problem: </span>
                        <span className="text-text-secondary">{project.problem}</span>
                      </div>
                      <div>
                        <span className="font-mono text-accent font-semibold">Solution: </span>
                        <span className="text-text-secondary">{project.solution}</span>
                      </div>
                    </div>

                    {/* Role & Impact */}
                    <div className="mb-4 text-xs font-mono text-text-muted space-y-1">
                      <div>
                        <span className="text-text-secondary font-medium">Role: </span>
                        <span>{project.role}</span>
                      </div>
                      {project.impact && (
                        <div>
                          <span className="text-text-secondary font-medium">Impact: </span>
                          <span>{project.impact}</span>
                        </div>
                      )}
                    </div>

                    {/* Tech stack chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Key Features List */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-mono text-text-muted">{"// Key Features"}</p>
                        {hasMoreFeatures && (
                          <button
                            onClick={() => toggleFeatures(project.title)}
                            className="text-[11px] font-mono text-primary hover:underline flex items-center gap-0.5 cursor-pointer"
                          >
                            {isExpanded ? (
                              <>Show Less <ChevronUp size={12} /></>
                            ) : (
                              <>+{project.features.length - 4} More <ChevronDown size={12} /></>
                            )}
                          </button>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        {visibleFeatures.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-1.5 text-text-secondary text-xs"
                          >
                            <span className="text-accent mt-0.5 shrink-0">▹</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Links & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border-subtle mt-auto">
                    {project.live ? (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white transition-all duration-200"
                        style={{
                          background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                          boxShadow: "0 0 12px rgba(59, 130, 246, 0.3)",
                        }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <Globe size={14} />
                        {project.liveLabel || "Live Demo"}
                      </motion.a>
                    ) : (
                      <span className="text-[11px] font-mono text-text-muted italic flex items-center gap-1">
                        Internal Project
                      </span>
                    )}

                    {project.github ? (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary glass transition-all duration-200"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <Github size={14} />
                        GitHub Repo
                      </motion.a>
                    ) : project.repoAvailableOnRequest ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono text-text-muted glass border border-border-subtle opacity-80" title="Private repository for institutional/client project">
                        <Lock size={12} className="text-text-muted" />
                        Repo available on request
                      </span>
                    ) : null}
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
