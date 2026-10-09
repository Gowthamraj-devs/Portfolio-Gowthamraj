/**
 * GOWTHAMRAJ G — PORTFOLIO DATA (js/data.js)
 * Beginner-friendly data file containing personal details, skills, and projects.
 */

const PERSONAL = {
  name: "Gowthamraj G",
  title: "Web Developer & B.Sc Computer Science Student",
  roles: [
    "Web Developer",
    "Python Developer",
    "JavaScript Developer",
    "Software Developer Trainee"
  ],
  bio: "I am a B.Sc Computer Science student building clean, responsive websites and software applications using HTML, CSS, JavaScript, Node.js, Python, C, and Java.",
  email: "gowthamrajg2006@gmail.com",
  phone: "+91 8825728535",
  whatsapp: "https://wa.me/918825728535",
  location: "Erode, Tamil Nadu, India",
  github: "https://github.com/Gowthamraj-devs",
  linkedin: "https://linkedin.com/in/gowthamraj-g-aa9166344",
  resumeUrl: "resume.pdf"
};

const SKILLS = [
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
  { name: "VS Code", category: "tool" }
];

const PROJECTS = [
  {
    title: "OD Application Management System",
    description: "A full-stack web application designed for managing student On-Duty requests with automated multi-level approval workflows and notification systems.",
    status: "completed",
    year: "2025",
    featured: true,
    problem: "Managing student On-Duty applications manually caused paperwork delays and lacked transparent approval tracking.",
    solution: "Built an automated web platform enabling multi-tier approval flows across staff and HOD levels with status notifications.",
    role: "Developer (Student Application Portal)",
    impact: "Streamlined On-Duty application processing and eliminated paper-based request delays for college departments.",
    // Accurate project technologies as specified
    stack: ["Frontend: Vercel", ".NET Backend: Render", "Neon PostgreSQL", "Google Cloud Email"],
    features: [
      "Student OD Application Workflow",
      "Staff Review & Approval Portal",
      "Department Approval Workflow",
      "Email Notification Messaging",
      "Certificate Upload & Verification",
      "Responsive Administrative Dashboard"
    ],
    repoAvailableOnRequest: true
  },
  {
    title: "Restaurant Website Demo",
    description: "A modern responsive website concept built to showcase digital menu, location, and WhatsApp contact solutions for food businesses.",
    status: "completed",
    year: "2025",
    featured: false,
    problem: "Small dining establishments struggle to present interactive menus and direct ordering contacts effectively on mobile devices.",
    solution: "Designed a clean interactive website featuring filterable food items, map location, and direct WhatsApp customer connection.",
    role: "Frontend Developer",
    impact: "Demonstrated interactive digital menu access and direct instant messaging contact for restaurant customers.",
    stack: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "CSS Animations"],
    features: [
      "Mobile-Optimized Interface",
      "Interactive Food Category Showcase",
      "Photo Gallery",
      "Google Maps Location Embed",
      "WhatsApp Direct Contact Link",
      "Smooth Scroll Navigation"
    ],
    github: "https://github.com/Gowthamraj-devs/Project-One",
    live: "https://gowthamraj-devs.github.io/Project-One/",
    liveLabel: "Demo Website"
  },
  {
    title: "College Management System",
    description: "A web-based academic management project for organizing student profiles, attendance tracking, and department metrics.",
    status: "ongoing",
    year: "2024 – Present",
    featured: false,
    problem: "Academic departments need centralized software to manage student data and attendance records efficiently.",
    solution: "Developing a management portal using Python and JavaScript to handle student information and administrative reports.",
    role: "Developer",
    impact: "Organizes administrative data handling and student record reporting.",
    stack: ["Python", "JavaScript", "HTML5", "CSS3", "SQL"],
    features: [
      "Student & Faculty Directory",
      "Attendance Tracking System",
      "Department Record Management",
      "User Authentication",
      "Responsive Dashboard",
      "Report Generation"
    ],
    repoAvailableOnRequest: true
  }
];

const SERVICES = [
  {
    title: "Restaurant Websites",
    description: "Modern digital menu and restaurant websites with photo galleries, Google Maps location, and WhatsApp contact options.",
    icon: "utensils",
    features: [
      "Interactive Food Menu",
      "Food Photo Gallery",
      "Google Maps Integration",
      "Direct WhatsApp Contact"
    ]
  },
  {
    title: "Business Websites",
    description: "Professional websites for local businesses, services, and companies tailored for strong brand presence.",
    icon: "briefcase",
    features: [
      "Clean UI & Brand Identity",
      "Services Showcase",
      "Customer Contact Form",
      "Mobile-Friendly Structure"
    ]
  },
  {
    title: "Responsive Web Design",
    description: "Mobile-first websites designed to run smoothly on smartphones, tablets, and desktop computers.",
    icon: "smartphone",
    features: [
      "Mobile-First Layouts",
      "Cross-Browser Compatibility",
      "Fast Touch Interactions",
      "Optimized Spacing & Typography"
    ]
  },
  {
    title: "Website Improvements",
    description: "UI redesign, performance optimization, mobile fixes, and modern subtle animations for existing sites.",
    icon: "zap",
    features: [
      "Modern Visual Redesign",
      "Mobile Responsiveness Fixes",
      "Speed Optimization",
      "Smooth CSS & UI Polish"
    ]
  }
];

const EXPERIENCES = [
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
      "Gained practical exposure to commercial software development routines and database integration."
    ]
  }
];

const EDUCATION = [
  {
    degree: "B.Sc Computer Science",
    institution: "Nandha Arts and Science College (Autonomous)",
    location: "Erode, Tamil Nadu, India",
    period: "2024 – 2027",
    status: "Graduation: 2027",
    aggregate: "69.5% (First Four Semesters)",
    details: "Focusing on Web Development, Python, JavaScript, C, Java, and Database Management."
  }
];

const CERTIFICATES = [
  {
    title: "Software Development Internship Certificate",
    issuer: "Nallas Technologies India Pvt. Ltd.",
    year: "2025"
  }
];
