"use client";

import { GraduationCap, MapPin, Calendar, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import { EDUCATION } from "@/lib/constants";

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        <Reveal>
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 tracking-wider uppercase">{"// EDUCATION"}</p>
          <h2 className="section-title gradient-text">
            Academic Background
          </h2>
          <p className="section-subtitle">
            My computer science education and academic progress.
          </p>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line" />

          {EDUCATION.map((edu, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="relative pl-10 md:pl-0 mb-10 last:mb-0">
                {/* Timeline dot */}
                <div
                  className="timeline-dot"
                  style={{
                    background: "var(--color-secondary)",
                    boxShadow: "0 0 12px rgba(139, 92, 246, 0.6)",
                  }}
                />

                {/* Card */}
                <div className="md:ml-[calc(50%+2rem)]">
                  <GlowCard glowColor="purple">
                    {/* Degree & Institution */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="p-2.5 rounded-xl shrink-0"
                        style={{
                          background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.15))",
                        }}
                      >
                        <GraduationCap className="text-secondary" size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">
                          {edu.degree}
                        </h3>
                        <p className="text-secondary font-medium text-sm">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-secondary/15 text-secondary border border-secondary/20 mb-3">
                      <TrendingUp size={12} />
                      {edu.status}
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-3 text-xs text-text-muted font-mono">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>

                    {/* Aggregate */}
                    {edu.aggregate && (
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border-subtle">
                        <span className="text-text-muted text-xs font-mono">academic record:</span>
                        <span className="text-accent font-medium text-xs sm:text-sm">{edu.aggregate}</span>
                      </div>
                    )}
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
