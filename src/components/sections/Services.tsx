"use client";

import { motion } from "framer-motion";
import { Utensils, Briefcase, Smartphone, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Utensils,
  Briefcase,
  Smartphone,
  Zap,
};

export default function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative">
      <div className="section-container">
        <Reveal>
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 tracking-wider uppercase">{"// FREELANCE SERVICES"}</p>
          <h2 className="section-title gradient-text">
            Website Development Services
          </h2>
          <p className="section-subtitle">
            Modern, fast, and responsive web solutions designed for local businesses, restaurants, and startups.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Zap;
            const glowColors: Array<"blue" | "purple" | "cyan"> = ["blue", "purple", "cyan", "blue"];
            const glowColor = glowColors[index % glowColors.length];

            return (
              <Reveal key={service.title} delay={index * 0.12}>
                <GlowCard glowColor={glowColor} className="h-full flex flex-col justify-between">
                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="p-3 rounded-xl shrink-0"
                        style={{
                          background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))",
                        }}
                      >
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text-secondary">
                          <CheckCircle2 size={15} className="text-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Action */}
                  <div className="pt-4 border-t border-border-subtle">
                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                      Inquire about this service <ArrowRight size={14} />
                    </button>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>

        {/* CTA banner */}
        <Reveal delay={0.3} className="mt-12">
          <div className="glass rounded-2xl p-8 text-center neon-border relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-text-primary">
                Need a Custom Website for Your Local Business?
              </h3>
              <p className="text-text-secondary text-sm">
                Get a clean, modern, and mobile-friendly website tailored to your business needs with fast turnaround time.
              </p>
              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-medium transition-all duration-200 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
