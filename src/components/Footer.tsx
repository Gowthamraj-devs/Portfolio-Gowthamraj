"use client";

import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, WhatsappIcon } from "@/components/icons";
import { PERSONAL } from "@/lib/constants";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative border-t border-border-subtle bg-background/50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <h3 className="text-lg font-bold text-text-primary">
              {PERSONAL.name}
            </h3>
            <p className="text-xs text-text-muted font-mono">
              Web Developer | B.Sc Computer Science
            </p>
            <p className="text-xs text-text-muted mt-1">
              © {currentYear} {PERSONAL.name}. All rights reserved.
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Mail size={16} className="text-primary" />
            <span>Email:</span>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-primary hover:underline font-mono text-xs"
            >
              {PERSONAL.email}
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: PERSONAL.github, label: "GitHub" },
              { icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
              { icon: WhatsappIcon, href: PERSONAL.whatsapp, label: "WhatsApp" },
              { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass text-text-muted hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
