/**
 * GOWTHAMRAJ G — PORTFOLIO DATA (js/data.js)
 * Data file containing personal details, skills, projects, education, and experiences.
 */

const PERSONAL = {
  name: "Gowthamraj G",
  title: "Aspiring Software Developer | B.Sc Computer Science Student",
  roles: [
    "Backend Developer",
    "Python Developer",
    "Software Developer Trainee",
    "Web Developer"
  ],
  bio: "I am a B.Sc. Computer Science student at Nandha Arts and Science College (Autonomous), Erode, graduating in 2027. I am interested in software development and backend programming, with knowledge of C, Java, Python, JavaScript, HTML, CSS, SQL, and Django. I have completed a one-month .NET development internship and contributed to academic software projects.",
  email: "gowthamrajg2006@gmail.com",
  phone: "+91 8825728535",
  whatsapp: "https://wa.me/918825728535",
  location: "Erode, Tamil Nadu, India",
  github: "https://github.com/Gowthamraj-devs",
  linkedin: "https://linkedin.com/in/gowthamraj-g-aa9166344",
  resumeUrl: "resume.pdf"
};

const SKILLS = [
  // Programming Languages
  { name: "C", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Python (Basic)", category: "backend" },
  { name: "JavaScript", category: "frontend" },

  // Web Technologies
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },

  // Backend and Frameworks
  { name: "Django", category: "backend" },
  { name: "C#", category: "backend" },
  { name: "ASP.NET / .NET (Basics)", category: "backend" },

  // Database
  { name: "SQL", category: "database" },

  // Tools
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "Visual Studio Code", category: "tool" },
  { name: "Visual Studio", category: "tool" }
];

const PROJECTS = [
  {
    title: "OD Application Management System",
    description: "A web application designed for managing student On-Duty requests with automated multi-level approval workflows and notification systems.",
    status: "completed",
    year: "July–September 2026",
    featured: true,
    problem: "Managing student On-Duty applications manually caused paperwork delays and lacked transparent approval tracking.",
    solution: "Built an automated web platform supporting individual and group OD requests, proof uploads, email notifications, and printable reports across student, staff, and HOD levels.",
    role: "Backend Developer & Team Contributor",
    impact: "Contributed to backend API development for the college On-Duty (OD) application system and approval workflow.",
    stack: ["ASP.NET Core Web API", "JavaScript"],
    features: [
      "Contributed to backend API development for the college On-Duty (OD) application system.",
      "Worked on backend functionality supporting the OD application and approval workflow for students, staff, and HODs.",
      "Individual & Group OD Requests",
      "Proof Uploads & Email Notifications",
      "Printable Reports Generation"
    ],
    live: "https://od-application-management-system.vercel.app/",
    liveLabel: "Live App Demo",
    github: "https://github.com/Venkatraman06/OD-Application-Management-System/"
  },
  {
    title: "College Management System",
    description: "A College Management System developed using Django and SQL to manage academic information.",
    status: "ongoing",
    year: "2024 – Present",
    featured: false,
    problem: "Academic departments need centralized software to manage student profiles and academic records efficiently.",
    solution: "Designed and developed a college management web application using Python (Django) with SQL-backed data storage.",
    role: "Developer",
    impact: "Implemented student and academic management modules with SQL-backed data storage.",
    stack: ["Python", "Django", "SQL", "HTML5", "CSS3"],
    features: [
      "Designed and developed a college management web application using Python (Django).",
      "Implemented student and academic management modules with SQL-backed data storage.",
      "Implemented backend functionality using Django with an SQL database."
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
    stack: ["JavaScript", "HTML5", "CSS3"],
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
    role: ".NET Full Stack Development Intern",
    company: "Nallas Technologies India Pvt. Ltd.",
    location: "Erode, Tamil Nadu",
    period: "Sep 2025",
    duration: "1 Month",
    points: [
      "Worked with C#, ASP.NET, HTML, CSS, JavaScript and SQL in an industry environment.",
      "Assisted in web application development tasks and learned how full-stack applications are structured.",
      "Followed professional software development workflows and completed assigned tasks within deadlines.",
      "Learned how frontend and backend components are integrated in a professional setting."
    ]
  }
];

const EDUCATION = [
  {
    degree: "B.Sc Computer Science (Third Year)",
    institution: "Nandha Arts and Science College (Autonomous)",
    location: "Erode, Tamil Nadu, India",
    period: "06/2024 – 06/2027",
    status: "Graduation: 2027",
    aggregate: "69.5% (First Four Semesters)",
    details: "Focusing on Software Development, Backend Programming, C, Java, Python, JavaScript, HTML, CSS, SQL, and Django."
  }
];

const CERTIFICATES = [
  {
    title: ".NET Full Stack Development Internship Certificate",
    issuer: "Nallas Technologies India Pvt. Ltd.",
    year: "2025"
  }
];
