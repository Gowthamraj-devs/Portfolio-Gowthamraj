"use client";

import { Code2, GraduationCap, Briefcase, Rocket } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import GlowCard from "@/components/GlowCard";
import { StaggerContainer, staggerChild } from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { ABOUT_STATS } from "@/lib/constants";

const statIcons = [GraduationCap, Code2, Rocket, Briefcase];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <SectionReveal>
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">// ABOUT ME</p>
          <h2 className="section-title gradient-text">
            About Me
          </h2>
          <p className="section-subtitle">
            A dedicated Computer Science student building clean, functional websites and web applications.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left — Code Card */}
          <SectionReveal className="lg:col-span-2" direction="left">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-15"
                style={{
                  background: "radial-gradient(circle, var(--color-secondary), transparent 70%)",
                }}
              />
              <GlowCard glowColor="purple" className="relative">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-text-muted mb-3">// student_profile.py</div>
                  <div>
                    <span className="syntax-keyword">class</span>{" "}
                    <span className="syntax-class">StudentProfile</span>:
                  </div>
                  <div className="pl-4">
                    <span className="syntax-keyword">def</span>{" "}
                    <span className="syntax-function">__init__</span>
                    <span className="syntax-paren">(</span>
                    <span className="syntax-self">self</span>
                    <span className="syntax-paren">)</span>:
                  </div>
                  <div className="pl-8">
                    <span className="syntax-self">self</span>.
                    <span className="syntax-variable">name</span> ={" "}
                    <span className="syntax-string">&quot;Gowthamraj G&quot;</span>
                  </div>
                  <div className="pl-8">
                    <span className="syntax-self">self</span>.
                    <span className="syntax-variable">degree</span> ={" "}
                    <span className="syntax-string">&quot;B.Sc Computer Science&quot;</span>
                  </div>
                  <div className="pl-8">
                    <span className="syntax-self">self</span>.
                    <span className="syntax-variable">college</span> ={" "}
                    <span className="syntax-string">&quot;Nandha Arts &amp; Science College&quot;</span>
                  </div>
                  <div className="pl-8">
                    <span className="syntax-self">self</span>.
                    <span className="syntax-variable">graduation</span> ={" "}
                    <span className="syntax-string">&quot;2027&quot;</span>
                  </div>
                  <div className="pl-8">
                    <span className="syntax-self">self</span>.
                    <span className="syntax-variable">interests</span> = [
                  </div>
                  <div className="pl-12">
                    <span className="syntax-string">&quot;Web Development&quot;</span>,
                  </div>
                  <div className="pl-12">
                    <span className="syntax-string">&quot;Django / Python / React&quot;</span>,
                  </div>
                  <div className="pl-12">
                    <span className="syntax-string">&quot;Freelance Website Development&quot;</span>
                  </div>
                  <div className="pl-8">]</div>
                </div>
              </GlowCard>
            </div>
          </SectionReveal>

          {/* Right — Bio Paragraphs */}
          <div className="lg:col-span-3 space-y-6">
            <SectionReveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                I am a <span className="text-primary font-semibold">B.Sc Computer Science student</span> at{" "}
                <span className="text-text-primary font-medium">Nandha Arts and Science College</span> (Graduation: <span className="text-accent font-semibold">2027</span>).
                I have a strong interest in modern web development and practical software engineering.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                My primary technical focus is on <span className="text-primary font-medium">Django, Python, and React.js</span>. I enjoy turning concepts into working applications with clean code, intuitive UI designs, and reliable backend functionality.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                Alongside my academic studies, I am actively interested in <span className="text-secondary font-semibold">freelance website development</span> — helping local businesses, restaurants, and startups establish a professional, mobile-friendly online presence.
              </p>
            </SectionReveal>

            {/* Quick Stats */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {ABOUT_STATS.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <motion.div
                    key={stat.label}
                    variants={staggerChild}
                    className="glass rounded-xl p-4 text-center hover-glow transition-all duration-300 cursor-default"
                  >
                    <Icon className="mx-auto mb-2 text-primary" size={20} />
                    <div className="text-xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-text-muted text-xs mt-1 font-mono">{stat.label}</div>
                  </motion.div>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
