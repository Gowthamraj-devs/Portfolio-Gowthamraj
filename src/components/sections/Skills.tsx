"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Database, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SKILLS, SKILL_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Database,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <Reveal>
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 tracking-wider uppercase">{"// MY SKILLS"}</p>
          <h2 className="section-title gradient-text">
            Skills &amp; Technologies
          </h2>
          <p className="section-subtitle">
            Core technologies and tools I utilize for web development and software projects.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Code2;
            const categorySkills = SKILLS.filter((s) => s.category === category.key);

            return (
              <Reveal key={category.key} delay={catIndex * 0.1}>
                <div className="glass rounded-2xl p-6 hover-glow transition-all duration-200 neon-border h-full flex flex-col justify-between">
                  <div>
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="p-3 rounded-xl"
                        style={{
                          background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))",
                        }}
                      >
                        <Icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">{category.label}</h3>
                        <span className="text-xs text-text-muted font-mono">
                          {categorySkills.length} technologies
                        </span>
                      </div>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-3">
                      {categorySkills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.25, delay: skillIndex * 0.04 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2.5 rounded-xl glass border border-primary/20 hover:border-primary/50 text-text-primary font-medium text-sm flex items-center gap-2 shadow-sm transition-colors duration-200 cursor-default"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {skill.name}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
