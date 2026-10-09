// ============================================================
// PERSONAL DATA & CONSTANTS
// ============================================================

export const BASE_PATH = "/Portfolio-Gowthamraj";

export const getAssetPath = (path: string): string => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
};

export const PERSONAL = {
  name: "Gowthamraj G",
  title: "Web Developer & B.Sc Computer Science Student",
  headlineRole: "Web & Software Developer",
  roles: [
    "Web Developer",
    "Python Developer",
    "JavaScript Developer",
    "Software Developer Trainee",
  ] as const,
  bio: "I build clean, responsive websites and software applications using HTML, CSS, JavaScript, Node.js, Python, C, and Java.",
  email: "gowthamrajg2006@gmail.com",
  phone: "+91 8825728535",
  whatsapp: "https://wa.me/918825728535",
  location: "Erode, Tamil Nadu, India",
  github: "https://github.com/Gowthamraj-devs",
  linkedin: "https://linkedin.com/in/gowthamraj-g-aa9166344",
  // Centralized resume URL with basePath compatibility
  resumeUrl: `${BASE_PATH}/resume.pdf`,
} as const;

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
] as const;

// ============================================================
// SKILLS — SIMPLIFIED TO USER'S EXACT STACK
// ============================================================

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "tool";
}

export const SKILL_CATEGORIES = [
  { key: "frontend" as const, label: "Frontend Development", icon: "Code2" },
  { key: "backend" as const, label: "Backend & Core Languages", icon: "Layers" },
  { key: "database" as const, label: "Database", icon: "Database" },
  { key: "tool" as const, label: "Tools & Workflow", icon: "Wrench" },
];

export const SKILLS: SkillItem[] = [
  // Frontend
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },

  // Backend & Core Languages
  { name: "Python", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "C", category: "backend" },
  { name: "Java", category: "backend" },

  // Database
  { name: "SQL", category: "database" },

  // Tools & Workflow
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "VS Code", category: "tool" },
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
      "Modern digital menu and restaurant websites with photo galleries, Google Maps location, and WhatsApp contact options.",
    icon: "Utensils",
    features: [
      "Interactive Food Menu",
      "Food Photo Gallery",
      "Google Maps Integration",
      "Direct WhatsApp Contact",
    ],
  },
  {
    title: "Business Websites",
    description:
      "Professional websites for local businesses, services, and companies tailored for strong brand presence.",
    icon: "Briefcase",
    features: [
      "Clean UI & Brand Identity",
      "Services Showcase",
      "Customer Contact Form",
      "Mobile-Friendly Structure",
    ],
  },
  {
    title: "Responsive Web Design",
    description:
      "Mobile-first websites designed to run smoothly on smartphones, tablets, and desktop computers.",
    icon: "Smartphone",
    features: [
      "Mobile-First Layouts",
      "Cross-Browser Compatibility",
      "Fast Touch Interactions",
      "Optimized Spacing & Typography",
    ],
  },
  {
    title: "Website Improvements",
    description:
      "UI redesign, performance optimization, mobile fixes, and modern subtle animations for existing sites.",
    icon: "Zap",
    features: [
      "Modern Visual Redesign",
      "Mobile Responsiveness Fixes",
      "Speed Optimization",
      "Smooth CSS & UI Polish",
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
  problem: string;
  solution: string;
  role: string;
  impact: string;
  stack: string[];
  features: string[];
  github?: string;
  repoAvailableOnRequest?: boolean;
  live?: string;
  liveLabel?: string;
  image?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "OD Application Management System",
    description:
      "A web application for automating student On-Duty request submissions, faculty review, and status tracking.",
    status: "completed",
    year: "2025",
    featured: true,
    problem:
      "Managing student On-Duty applications manually caused paperwork delays and lacked transparent approval tracking.",
    solution:
      "Built a web platform enabling structured approval workflows for staff and department heads with status notifications.",
    role: "Developer (Student Application Portal)",
    impact:
      "Streamlined On-Duty application processing and eliminated paper-based request delays.",
    stack: ["JavaScript", "HTML5", "CSS3", "SQL", "Node.js"],
    features: [
      "Student OD Application Workflow",
      "Staff Review & Approval Portal",
      "Department Approval Workflow",
      "Notification Messaging",
      "Certificate Upload & Verification",
      "Responsive Administrative Dashboard",
    ],
    repoAvailableOnRequest: true,
  },
  {
    title: "Restaurant Website Demo",
    description:
      "A modern responsive website concept built to showcase digital menu, location, and WhatsApp contact solutions for food businesses.",
    status: "completed",
    year: "2025",
    featured: false,
    problem:
      "Small dining establishments struggle to present interactive menus and direct ordering contacts effectively on mobile devices.",
    solution:
      "Designed a clean interactive website featuring filterable food items, map location, and direct WhatsApp customer connection.",
    role: "Frontend Developer",
    impact:
      "Demonstrated interactive digital menu access and direct instant messaging contact for restaurant customers.",
    stack: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "CSS Animations"],
    features: [
      "Mobile-Optimized Interface",
      "Interactive Food Category Showcase",
      "Photo Gallery",
      "Google Maps Location Embed",
      "WhatsApp Direct Contact Link",
      "Smooth Scroll Navigation",
    ],
    github: "https://github.com/Gowthamraj-devs/Project-One",
    live: "https://gowthamraj-devs.github.io/Project-One/",
    liveLabel: "Demo Website",
  },
  {
    title: "College Management System",
    description:
      "A web-based academic management project for organizing student profiles, attendance tracking, and department metrics.",
    status: "ongoing",
    year: "2024 – Present",
    featured: false,
    problem:
      "Academic departments need centralized software to manage student data and attendance records efficiently.",
    solution:
      "Developing a management portal using Python and JavaScript to handle student information and administrative reports.",
    role: "Developer",
    impact:
      "Organizes administrative data handling and student record reporting.",
    stack: ["Python", "JavaScript", "HTML5", "CSS3", "SQL"],
    features: [
      "Student & Faculty Directory",
      "Attendance Tracking System",
      "Department Record Management",
      "User Authentication",
      "Responsive Dashboard",
      "Report Generation",
    ],
    repoAvailableOnRequest: true,
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
    role: "Software Development Intern",
    company: "Nallas Technologies India Pvt. Ltd.",
    location: "Erode, Tamil Nadu",
    period: "Sep 2025",
    duration: "1 Month",
    points: [
      "Assisted in web development tasks using HTML, CSS, JavaScript, and database concepts in an industry environment.",
      "Collaborated on backend data structures and user interface component updates.",
      "Participated in software testing, code reviews, and project workflow routines.",
      "Gained practical exposure to software development routines and team collaboration.",
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
      "Focusing on Web Development, Python, JavaScript, C, Java, and Database Management.",
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
    title: "Software Development Internship Certificate",
    issuer: "Nallas Technologies India Pvt. Ltd.",
    year: "2025",
  },
];

// ============================================================
// VS CODE EDITOR CODE — FEATURING USER'S EXACT TECH STACK
// ============================================================

export const VSCODE_CODE = `class GowthamrajG:

    def __init__(self):
        self.name = "Gowthamraj G"
        self.title = "Web Developer & B.Sc CS Student"
        self.college = "Nandha Arts and Science College"
        self.graduation = "2027"

        self.skills = {
            "frontend": ["HTML5", "CSS3", "JavaScript"],
            "backend_and_core": ["Python", "Node.js", "C", "Java"],
            "database": ["SQL"],
            "tools": ["Git", "GitHub", "VS Code"]
        }

    def build_project(self, requirements):
        return {
            "status": "Ready",
            "design": "Responsive & Clean UI",
            "code": "Readable & Structured",
            "performance": "Fast & Reliable"
        }

dev = GowthamrajG()
print("Building clean websites and software applications! 🚀")`;

// ============================================================
// FLOATING CODE SNIPPETS (for background animation)
// ============================================================

export const FLOATING_SNIPPETS = [
  "const dev = 'Gowthamraj G';",
  "function WebDev()",
  "console.log('Hello World');",
  "python script.py",
  "int main() { return 0; }",
  "public class Main {}",
  "display: flex;",
  "<Navbar />",
  "git push origin main",
  "SELECT * FROM projects;",
  "{ title: 'OD Application' }",
  "gradient-text",
  "node server.js",
  "mailto:gowthamrajg2006@gmail.com",
];

// ============================================================
// ABOUT STATS
// ============================================================

export const ABOUT_STATS = [
  { label: "Graduation", value: "2027" },
  { label: "Degree", value: "B.Sc CS" },
  { label: "College", value: "NASC" },
  { label: "Focus", value: "Web & Software" },
];
