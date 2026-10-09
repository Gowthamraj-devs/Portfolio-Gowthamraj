"use client";

import { Code2, GraduationCap, Briefcase, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import { motion } from "framer-motion";
import { ABOUT_STATS } from "@/lib/constants";

const statIcons = [GraduationCap, Code2, Rocket, Briefcase];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <Reveal>
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 tracking-wider uppercase">{"// ABOUT ME"}</p>
          <h2 className="section-title gradient-text">
            About Me
          </h2>
          <p className="section-subtitle">
            A dedicated Computer Science student building clean, functional websites and software applications.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left — Code Card */}
          <Reveal className="lg:col-span-2" direction="left">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-15 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, var(--color-secondary), transparent 70%)",
                }}
              />
              <GlowCard glowColor="purple" className="relative">
                <div className="font-mono text-xs sm:text-sm space-y-2 overflow-x-auto pb-2">
                  <div className="text-text-muted mb-3">{"// student_profile.py"}</div>
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
                    <span className="syntax-variable">focus</span> = [
                  </div>
                  <div className="pl-12">
                    <span className="syntax-string">&quot;Web Dev (HTML, CSS, JS)&quot;</span>,
                  </div>
                  <div className="pl-12">
                    <span className="syntax-string">&quot;Python / Node.js&quot;</span>,
                  </div>
                  <div className="pl-12">
                    <span className="syntax-string">&quot;C &amp; Java Core Concepts&quot;</span>
                  </div>
                  <div className="pl-8">]</div>
                </div>
              </GlowCard>
            </div>
          </Reveal>

          {/* Right — Bio Paragraphs */}
          <div className="lg:col-span-3 space-y-6">
            <Reveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                I am a <span className="text-primary font-semibold">B.Sc Computer Science student</span> at{" "}
                <span className="text-text-primary font-medium">Nandha Arts and Science College</span> (Graduation: <span className="text-accent font-semibold">2027</span>).
                I am passionate about learning software development and building practical, user-friendly websites.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                My primary technical skill set includes <span className="text-primary font-medium">HTML, CSS, JavaScript, Node.js, and Python</span>, along with fundamental programming in <span className="text-accent font-medium">C and Java</span>. I focus on writing clear, structured code and creating responsive web interfaces.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                Alongside my academic coursework, I am interested in <span className="text-secondary font-semibold">freelance website design</span> — helping local businesses and food establishments create fast, mobile-friendly online presences.
              </p>
            </Reveal>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {ABOUT_STATS.map((stat, index) => {
                const Icon = statIcons[index % statIcons.length];
                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="glass rounded-xl p-4 text-center hover-glow transition-all duration-200 cursor-default"
                  >
                    <Icon className="mx-auto mb-2 text-primary" size={20} />
                    <div className="text-base sm:text-lg font-bold gradient-text">{stat.value}</div>
                    <div className="text-text-muted text-xs mt-1 font-mono">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
