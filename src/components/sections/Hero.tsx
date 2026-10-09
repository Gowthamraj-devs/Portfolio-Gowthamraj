"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown, FolderGit2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, WhatsappIcon } from "@/components/icons";
import TypeWriter from "@/components/TypeWriter";
import VSCodeEditor from "@/components/VSCodeEditor";
import Reveal from "@/components/Reveal";
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
            {/* Tagline */}
            <Reveal delay={0.05} duration={0.4}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[1px] w-8 bg-primary" />
                <span className="text-primary text-xs sm:text-sm font-mono tracking-wider uppercase font-medium">
                  Welcome to my portfolio
                </span>
              </div>
            </Reveal>

            {/* Headline Name & Title */}
            <Reveal delay={0.12} duration={0.5}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight">
                <span className="gradient-text">{PERSONAL.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
                {PERSONAL.title}
              </h2>
            </Reveal>

            {/* Rotating Role Line */}
            <Reveal delay={0.2} duration={0.5}>
              <div className="text-base sm:text-lg font-medium text-accent mb-5 min-h-[32px] flex items-center">
                <span className="mr-2 text-text-muted font-mono text-sm">Focus:</span>
                <TypeWriter
                  words={PERSONAL.roles}
                  typingSpeed={40}
                  deletingSpeed={30}
                  pauseDuration={2000}
                />
              </div>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.28} duration={0.5}>
              <p className="text-text-secondary leading-relaxed mb-8 max-w-xl text-base sm:text-lg">
                {PERSONAL.bio}
              </p>
            </Reveal>

            {/* Action CTA Buttons */}
            <Reveal delay={0.36} duration={0.5}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {/* View My Projects */}
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium text-sm transition-all duration-200 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.35)",
                  }}
                >
                  <FolderGit2 size={18} />
                  View My Projects
                </motion.button>

                {/* Contact Me */}
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 border border-primary/40 text-primary hover:bg-primary/10 cursor-pointer"
                >
                  <Mail size={18} />
                  Contact Me
                </motion.button>

                {/* Download Resume */}
                <motion.a
                  href={PERSONAL.resumeUrl}
                  download="Gowthamraj_G_Resume.pdf"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-glow"
                >
                  <ArrowDown size={18} />
                  Download Resume
                </motion.a>
              </div>
            </Reveal>

            {/* Social Connect Icons */}
            <Reveal delay={0.44} duration={0.5}>
              <div className="flex items-center gap-4">
                <span className="text-text-muted text-xs font-mono uppercase tracking-wider">connect:</span>
                {[
                  { icon: Github, href: PERSONAL.github, label: "GitHub Profile" },
                  { icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn Profile" },
                  { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Direct Email" },
                  { icon: WhatsappIcon, href: PERSONAL.whatsapp, label: "WhatsApp Direct Chat" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass text-text-secondary hover:text-primary transition-all duration-200"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 16px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Side — VS Code Editor */}
          <Reveal delay={0.2} direction="right" duration={0.6} className="order-1 lg:order-2">
            <div className="relative">
              {/* Ambient glow behind code editor */}
              <div
                className="absolute -inset-6 rounded-3xl blur-3xl opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 50%, var(--color-primary), var(--color-secondary), transparent 70%)",
                }}
              />
              <div className="relative">
                <VSCodeEditor />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="text-text-muted opacity-50" size={18} />
      </motion.div>
    </section>
  );
}
