// ============================================================
// PERSONAL DATA & CONSTANTS
// ============================================================

export const PERSONAL = {
  name: "Gowthamraj G",
  title: "Web Developer & B.Sc Computer Science Student",
  roles: [
    "Web Developer",
    "B.Sc CS Student",
    "React & Django Developer",
    "Freelance Web Developer",
  ],
  bio: `I build modern, responsive websites and web applications with clean UI and practical functionality.`,
  email: "gowthamrajg2006@gmail.com",
  phone: "+91 8825728535",
  whatsapp: "https://wa.me/918825728535",
  location: "Erode, Tamil Nadu, India",
  github: "https://github.com/Gowthamraj-devs",
  linkedin: "https://linkedin.com/in/gowthamraj-g-aa9166344",
  resumeUrl: "/resume.pdf",
} as const;

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

// ============================================================
// SKILLS
// ============================================================

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "tool";
}

export const SKILL_CATEGORIES = [
  { key: "frontend" as const, label: "Frontend", icon: "Code2" },
  { key: "backend" as const, label: "Backend", icon: "Layers" },
  { key: "database" as const, label: "Database", icon: "Database" },
  { key: "tool" as const, label: "Tools", icon: "Wrench" },
];

export const SKILLS: SkillItem[] = [
  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React.js", category: "frontend" },

  // Backend
  { name: "Python", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "C#", category: "backend" },
  { name: "ASP.NET / .NET", category: "backend" },

  // Database
  { name: "SQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB basics", category: "database" },

  // Tools
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "VS Code / Visual Studio", category: "tool" },
  { name: "Vercel", category: "tool" },
  { name: "Render", category: "tool" },
];

// ============================================================
// FREELANCE SERVICES
// ============================================================

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Restaurant Websites",
    description:
      "Modern websites with menu, gallery, location, WhatsApp and contact options.",
    icon: "Utensils",
    features: [
      "Interactive Food Menu",
      "Food Photo Gallery",
      "Google Maps Location",
      "WhatsApp Direct Contact",
    ],
  },
  {
    title: "Business Websites",
    description:
      "Professional websites for small businesses and local companies.",
    icon: "Briefcase",
    features: [
      "Clean UI & Brand Identity",
      "Services & Offerings Showcase",
      "Customer Inquiry Contact Forms",
      "SEO-Friendly Structure",
    ],
  },
  {
    title: "Responsive Website Design",
    description:
      "Mobile-friendly websites that work across phones, tablets and desktops.",
    icon: "Smartphone",
    features: [
      "Mobile-First Layouts",
      "Cross-Browser Compatibility",
      "Fast Touch Interaction",
      "Optimized Layout Spacing",
    ],
  },
  {
    title: "Website Improvements",
    description:
      "UI redesign, responsiveness, performance and modern animations.",
    icon: "Zap",
    features: [
      "Modern Visual Redesign",
      "Mobile Responsiveness Fixes",
      "Performance Speed Optimization",
      "Smooth CSS & Scroll Animations",
    ],
  },
];

// ============================================================
// PROJECTS
// ============================================================

export interface Project {
  title: string;
  description: string;
  status: "ongoing" | "completed";
  year: string;
  stack: string[];
  features: string[];
  github?: string;
  live?: string;
  liveLabel?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "OD Application Management System",
    description:
      "A full-stack web application designed for managing student On-Duty requests with automated multi-level approval workflows and notification systems.",
    status: "completed",
    year: "2025",
    stack: ["HTML", "CSS", "JavaScript", ".NET", "C#", "SQL"],
    features: [
      "Student OD application workflow",
      "Staff approval",
      "HOD approval",
      "Email notifications",
      "Certificate handling",
      "Responsive UI",
    ],
    github: "https://github.com/Gowthamraj-devs",
  },
  {
    title: "Restaurant Website Demo",
    description:
      "A modern responsive restaurant website concept created to demonstrate professional website solutions for restaurants.",
    status: "completed",
    year: "2025",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI", "Animations"],
    features: [
      "Responsive design",
      "Menu section",
      "Food gallery",
      "Restaurant information",
      "Google Maps",
      "WhatsApp contact",
      "Modern animations",
    ],
    live: "https://gowthamraj-devs.github.io/Project-One/",
    liveLabel: "Demo Website",
  },
  {
    title: "College Management System",
    description:
      "A full-stack college management application for managing academic operations, built with Python (Django), Django ORM, and React.js.",
    status: "ongoing",
    year: "2024 – Present",
    stack: ["Python", "Django", "Django REST", "React", "PostgreSQL"],
    features: [
      "Student & Faculty Management",
      "Attendance Tracking",
      "Fees Management",
      "Authentication & Authorization",
      "Responsive Dashboard",
      "RESTful APIs",
    ],
    github: "https://github.com/Gowthamraj-devs",
  },
];

// ============================================================
// EXPERIENCE
// ============================================================

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  points: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    role: ".NET Full Stack Development Intern",
    company: "Nallas Technologies India Pvt. Ltd.",
    location: "Erode, Tamil Nadu",
    period: "Sep 2025",
    duration: "1 Month",
    points: [
      "Worked with C#, ASP.NET, HTML, CSS, JavaScript, and SQL in a real industry environment following Agile development practices.",
      "Assisted in web application development including API integration tasks and gained exposure to full-stack development concepts.",
      "Participated in unit testing of modules and gained experience with deployment workflows and project delivery within deadlines.",
      "Developed understanding of backend and frontend integration in a professional setting.",
    ],
  },
];

// ============================================================
// EDUCATION
// ============================================================

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  aggregate?: string;
  details?: string;
}

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc Computer Science",
    institution: "Nandha Arts and Science College",
    location: "Erode, Tamil Nadu, India",
    period: "2024 – 2027",
    status: "Graduation: 2027",
    aggregate: "69.5% (First Four Semesters)",
    details:
      "Focusing on Web Development, Python, Django, React, and building practical website solutions for local businesses.",
  },
];

// ============================================================
// CERTIFICATES
// ============================================================

export interface Certificate {
  title: string;
  issuer: string;
  year?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    title: ".NET Full Stack Development Internship Certificate",
    issuer: "Nallas Technologies India Pvt. Ltd.",
    year: "2025",
  },
];

// ============================================================
// VS CODE EDITOR CODE
// ============================================================

export const VSCODE_CODE = `class GowthamrajG:

    def __init__(self):
        self.name = "Gowthamraj G"
        self.role = "Web Developer & B.Sc CS Student"
        self.college = "Nandha Arts and Science College"
        self.graduation = "2027"

        self.skills = {
            "frontend": ["HTML", "CSS", "JavaScript", "React.js"],
            "backend": ["Python", "Django", "C#", "ASP.NET"],
            "database": ["SQL", "PostgreSQL", "MongoDB"],
            "tools": ["Git", "GitHub", "VS Code", "Vercel"]
        }

    def build_website(self, client):
        return {
            "design": "Clean & Responsive",
            "performance": "Fast & Optimized",
            "support": "WhatsApp & Email Contact"
        }

dev = GowthamrajG()
print("Building modern web solutions! 🚀")`;

// ============================================================
// FLOATING CODE SNIPPETS (for background animation)
// ============================================================

export const FLOATING_SNIPPETS = [
  "const dev = 'Gowthamraj G';",
  "function WebDev()",
  "import React from 'react';",
  "python manage.py runserver",
  "class RestaurantWebsite:",
  "display: grid;",
  "<Navbar />",
  "git push origin main",
  "django-admin startproject",
  "SELECT * FROM projects;",
  "{ title: 'OD Application' }",
  "gradient-text",
  "glassmorphism",
  "mailto:gowthamrajg2006@gmail.com",
];

// ============================================================
// ABOUT STATS
// ============================================================

export const ABOUT_STATS = [
  { label: "Graduation", value: "2027" },
  { label: "College", value: "NASC" },
  { label: "Projects", value: "3+" },
  { label: "Experience", value: "Internship" },
];
