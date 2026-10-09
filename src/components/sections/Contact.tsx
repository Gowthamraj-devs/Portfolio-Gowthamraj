"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, WhatsappIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import { PERSONAL } from "@/lib/constants";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    color: "var(--color-primary)",
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp Direct",
    value: PERSONAL.phone,
    href: PERSONAL.whatsapp,
    color: "#25D366",
  },
  {
    icon: Github,
    label: "GitHub Profile",
    value: "Gowthamraj-devs",
    href: PERSONAL.github,
    color: "var(--color-text-primary)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn Profile",
    value: "Gowthamraj G",
    href: PERSONAL.linkedin,
    color: "#0A66C2",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "notice" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatusMessage({
        type: "error",
        text: "Please fill in all required fields (Name, Email, Message).",
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    // Simulate clean dispatch & provide direct messaging fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({
        type: "notice",
        text: "Form submitted! For immediate response, feel free to contact me directly via WhatsApp or Email.",
      });
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <Reveal>
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 tracking-wider uppercase">{"// GET IN TOUCH"}</p>
          <h2 className="section-title gradient-text">
            Contact Me
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need a website for your business, or want to connect? Send a message!
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto items-start">
          {/* Contact Info Cards (Left 2 cols) */}
          <Reveal className="lg:col-span-2 space-y-4" direction="left">
            <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <MessageSquare size={18} className="text-primary" /> Direct Contact Information
            </h3>

            {CONTACT_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 4 }}
                className="glass rounded-xl p-4 flex items-center gap-4 hover-glow transition-all duration-200 block border border-border-subtle hover:border-primary/40"
              >
                <div
                  className="p-3 rounded-xl shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))",
                  }}
                >
                  <link.icon size={20} style={{ color: link.color }} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-text-muted font-mono">{link.label}</p>
                  <p className="text-sm font-medium text-text-primary truncate">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <div className="glass rounded-xl p-4 flex items-center gap-4 border border-border-subtle">
              <div className="p-3 rounded-xl shrink-0 bg-primary/10">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-mono">Location</p>
                <p className="text-sm font-medium text-text-primary">
                  {PERSONAL.location}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact Form (Right 3 cols) */}
          <Reveal className="lg:col-span-3" direction="right" delay={0.15}>
            <GlowCard glowColor="blue" className="relative">
              <h3 className="text-xl font-bold text-text-primary mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-1.5">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-secondary mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="e.g. Website Development Inquiry"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-secondary mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your project, website requirements, or question..."
                    required
                    className="form-input resize-none"
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 font-medium ${
                      statusMessage.type === "error"
                        ? "bg-red-500/15 text-red-400 border border-red-500/20"
                        : "bg-primary/15 text-primary border border-primary/20"
                    }`}
                  >
                    {statusMessage.type === "error" ? (
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                    )}
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 rounded-xl font-medium text-sm text-white flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Instant WhatsApp & Email Buttons */}
              <div className="mt-6 pt-5 border-t border-border-subtle text-center">
                <p className="text-xs text-text-muted font-mono mb-3">Or connect instantly via:</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={PERSONAL.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 text-xs font-medium hover:bg-[#25D366]/25 transition-colors"
                  >
                    <WhatsappIcon size={14} />
                    WhatsApp Direct Chat
                  </a>
                  <a
                    href={`mailto:${PERSONAL.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/15 text-primary border border-primary/30 text-xs font-medium hover:bg-primary/25 transition-colors"
                  >
                    <Mail size={14} />
                    Send Direct Email
                  </a>
                </div>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
