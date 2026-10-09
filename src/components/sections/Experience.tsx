"use client";

import { Briefcase, MapPin, Calendar } from "lucide-react";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import { EXPERIENCES } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <Reveal>
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 tracking-wider uppercase">{"// EXPERIENCE"}</p>
          <h2 className="section-title gradient-text">
            Internship Experience
          </h2>
          <p className="section-subtitle">
            Industry internship exposure and practical web development experience.
          </p>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line" />

          {EXPERIENCES.map((exp, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="relative pl-10 md:pl-0 mb-10 last:mb-0">
                {/* Timeline dot */}
                <div className="timeline-dot" />

                {/* Card */}
                <div className="md:ml-[calc(50%+2rem)]">
                  <GlowCard glowColor="cyan">
                    {/* Role & Company */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="p-2.5 rounded-xl shrink-0"
                        style={{
                          background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.15))",
                        }}
                      >
                        <Briefcase className="text-accent" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-xs text-text-muted font-mono">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={12} />
                        {exp.period} ({exp.duration})
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-text-secondary text-xs sm:text-sm leading-relaxed"
                        >
                          <span className="text-accent mt-1 shrink-0">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlowCard>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
