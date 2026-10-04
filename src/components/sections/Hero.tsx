"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown, FolderGit2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, WhatsappIcon } from "@/components/icons";
import TypeWriter from "@/components/TypeWriter";
import VSCodeEditor from "@/components/VSCodeEditor";
import SectionReveal from "@/components/SectionReveal";
import { PERSONAL } from "@/lib/constants";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 lg:py-0">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side — Information & Action */}
          <div className="order-2 lg:order-1">
            <SectionReveal delay={0.1}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[1px] w-8 bg-primary" />
                <span className="text-primary text-sm font-mono tracking-wider uppercase font-medium">
                  Welcome to my portfolio
                </span>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight">
                <span className="gradient-text">{PERSONAL.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
                {PERSONAL.title}
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="text-lg font-medium text-accent mb-6 h-8 flex items-center">
                <span className="mr-2 text-text-muted font-mono text-sm">Focus:</span>
                <TypeWriter
                  words={PERSONAL.roles}
                  typingSpeed={70}
                  deletingSpeed={35}
                  pauseDuration={2000}
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <p className="text-text-secondary leading-relaxed mb-8 max-w-xl text-base sm:text-lg">
                {PERSONAL.bio}
              </p>
            </SectionReveal>

            <SectionReveal delay={0.5}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {/* View My Projects */}
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.35)",
                  }}
                >
                  <FolderGit2 size={18} />
                  View My Projects
                </button>

                {/* Contact Me */}
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 border border-primary/40 text-primary hover:bg-primary/10"
                >
                  <Mail size={18} />
                  Contact Me
                </button>

                {/* Download Resume */}
                <a
                  href={PERSONAL.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-glow"
                >
                  <ArrowDown size={18} />
                  Download Resume
                </a>
              </div>
            </SectionReveal>

            {/* Social Icons */}
            <SectionReveal delay={0.6}>
              <div className="flex items-center gap-4">
                <span className="text-text-muted text-sm font-mono mr-1">connect:</span>
                {[
                  { icon: Github, href: PERSONAL.github, label: "GitHub" },
                  { icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
                  { icon: WhatsappIcon, href: PERSONAL.whatsapp, label: "WhatsApp" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass text-text-secondary hover:text-primary transition-all duration-300"
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 18px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right Side — VS Code Editor */}
          <SectionReveal delay={0.3} direction="right" className="order-1 lg:order-2">
            <div className="relative">
              {/* Ambient glow behind editor */}
              <div
                className="absolute -inset-8 rounded-3xl blur-3xl opacity-20"
                style={{
                  background: "radial-gradient(circle at 50% 50%, var(--color-primary), var(--color-secondary), transparent 70%)",
                }}
              />
              <div className="relative">
                <VSCodeEditor />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="text-text-muted opacity-60" size={20} />
      </motion.div>
    </section>
  );
}
