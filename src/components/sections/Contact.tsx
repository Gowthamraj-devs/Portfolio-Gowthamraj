"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, WhatsappIcon } from "@/components/icons";
import SectionReveal from "@/components/SectionReveal";
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
    label: "WhatsApp",
    value: PERSONAL.phone,
    href: PERSONAL.whatsapp,
    color: "#25D366",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Gowthamraj-devs",
    href: PERSONAL.github,
    color: "var(--color-text-primary)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Gowtham Raj",
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <SectionReveal>
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">// GET IN TOUCH</p>
          <h2 className="section-title gradient-text">
            Contact Me
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need a website for your business, or want to connect? Send me a message!
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <SectionReveal className="lg:col-span-3" delay={0.1}>
            <GlowCard glowColor="blue">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Website Development / Collaboration / Inquiry"
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or requirements..."
                    className="form-input resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium text-sm transition-all duration-300"
                  style={{
                    background: isSubmitted
                      ? "linear-gradient(135deg, #22c55e, #16a34a)"
                      : "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                    boxShadow: isSubmitted
                      ? "0 0 20px rgba(34, 197, 94, 0.3)"
                      : "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </GlowCard>
          </SectionReveal>

          {/* Contact Info Sidebar */}
          <SectionReveal className="lg:col-span-2" delay={0.2}>
            <div className="space-y-4">
              {/* Location */}
              <GlowCard glowColor="purple" className="!p-4">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-lg shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.15))",
                    }}
                  >
                    <MapPin className="text-secondary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted">location</p>
                    <p className="text-text-primary text-sm font-medium">{PERSONAL.location}</p>
                  </div>
                </div>
              </GlowCard>

              {/* Contact Links */}
              {CONTACT_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="glass rounded-2xl p-4 hover-glow transition-all duration-300 neon-border">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2.5 rounded-lg shrink-0"
                        style={{
                          background: "rgba(59,130,246,0.1)",
                        }}
                      >
                        <link.icon size={18} style={{ color: link.color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-mono text-text-muted">{link.label}</p>
                        <p className="text-text-primary text-sm font-medium truncate">
                          {link.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
