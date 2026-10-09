"use client";

import { Award, Building2, Calendar } from "lucide-react";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import { CERTIFICATES } from "@/lib/constants";

export default function Certificates() {
  return (
    <section id="certificates" className="relative">
      <div className="section-container">
        <Reveal>
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 tracking-wider uppercase">{"// CERTIFICATES"}</p>
          <h2 className="section-title gradient-text">
            Certifications
          </h2>
          <p className="section-subtitle">
            Verified technical certifications and internship credentials.
          </p>
        </Reveal>

        <div className="max-w-2xl mx-auto space-y-6">
          {CERTIFICATES.map((cert, index) => (
            <Reveal key={index} delay={index * 0.12}>
              <GlowCard glowColor="cyan">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="p-3 rounded-xl shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.15))",
                    }}
                  >
                    <Award className="text-accent" size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-text-primary mb-1">
                      {cert.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-text-secondary">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 size={14} className="text-text-muted" />
                        {cert.issuer}
                      </span>
                      {cert.year && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs">
                          <Calendar size={14} className="text-text-muted" />
                          {cert.year}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
