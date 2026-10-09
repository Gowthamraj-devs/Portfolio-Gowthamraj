# Gowthamraj G — Personal Developer Portfolio

Personal developer portfolio website of **Gowthamraj G**, Aspiring Software Developer & B.Sc Computer Science Student at Nandha Arts and Science College (Autonomous), Erode, Tamil Nadu.

🌐 **Live Website**: [https://gowthamraj-devs.github.io/Portfolio-Gowthamraj/](https://gowthamraj-devs.github.io/Portfolio-Gowthamraj/)

---

## 🛠️ My Core Skills & Technologies

- **Programming Languages**: C, Java, Python (Basic), JavaScript
- **Web Technologies**: HTML5, CSS3
- **Backend & Frameworks**: Django, C#, ASP.NET / .NET (Basics)
- **Database**: SQL
- **Tools**: Git, GitHub, Visual Studio Code, Visual Studio

---

## 🚀 Key Projects

### 1. OD Application Management System
- **Period**: July–September 2026
- **Role**: Backend Developer & Team Contributor
- **Technologies**: ASP.NET Core Web API, JavaScript
- **Live Demo**: [od-application-management-system.vercel.app](https://od-application-management-system.vercel.app/)
- **GitHub Repository**: [Venkatraman06/OD-Application-Management-System](https://github.com/Venkatraman06/OD-Application-Management-System/)
- **Description**: Contributed to backend API development and approval workflow logic for the college On-Duty (OD) application system (supporting student, staff, and HOD workflows).

### 2. College Management System
- **Status**: Ongoing (2024 – Present)
- **Role**: Developer
- **Technologies**: Python, Django, SQL, HTML5, CSS3
- **Description**: A College Management System developed using Django and SQL to manage academic information, student profiles, and administrative records.

### 3. Restaurant Website Demo
- **Year**: 2025
- **Role**: Frontend Developer
- **Technologies**: JavaScript, HTML5, CSS3
- **Live Demo**: [gowthamraj-devs.github.io/Project-One](https://gowthamraj-devs.github.io/Project-One/)
- **GitHub Repository**: [Gowthamraj-devs/Project-One](https://github.com/Gowthamraj-devs/Project-One)
- **Description**: A modern responsive concept website featuring filterable food items, Google Maps embed, and WhatsApp contact options.

---

## 📂 Project Structure (Vanilla Web Stack)

```
portfolio/
├── index.html              # Main HTML5 page (semantic structure, metadata, SEO)
├── css/
│   └── styles.css          # Theme variables, glassmorphism styling, keyframe animations
├── js/
│   ├── data.js             # Personal details, verified skills, projects, and education data
│   ├── boot.js             # Skippable terminal boot sequence script
│   ├── typewriter.js       # Rotating role typewriter script
│   ├── editor.js           # Animated VS Code code typing script
│   ├── navbar.js           # Scroll progress, active link observer, and mobile drawer
│   ├── reveal.js           # Scroll reveal transition script
│   ├── projects.js         # Collapsible feature lists script
│   ├── contact.js          # Contact form handler script
│   ├── main.js             # Dynamic section rendering script (populates data from data.js)
│   └── backgrounds/        # Visual canvas animations (Matrix rain, particles, floating snippets)
├── assets/
│   ├── favicon.ico         # Website favicon
│   └── resume.pdf          # Reviewed PDF resume copy
├── resume.pdf              # Reviewed PDF resume (root location for direct download)
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages workflow (deploys root index.html directly)
```

---

## 💻 How to Edit and Run Your Portfolio in VS Code

### 1. Opening and Previewing Locally
1. Open the project folder in **VS Code**.
2. Double-click `index.html` to open it in your web browser (or right-click `index.html` and choose **Open with Live Server**).
3. **No build steps, node_modules, or server compilation needed!**

### 2. How to Edit Your Portfolio Content
- **Personal Info, Skills, & Projects:**  
  Open [`js/data.js`](js/data.js) and update text inside `PERSONAL`, `SKILLS`, `PROJECTS`, `EXPERIENCES`, `EDUCATION`, or `CERTIFICATES`.
- **Website Styles & Colors:**  
  Open [`css/styles.css`](css/styles.css) to adjust CSS variables (e.g., `--color-primary`).
- **Page Layout & Meta Tags:**  
  Open [`index.html`](index.html) to edit HTML headings, meta tags, or section layout.

---

## 🌐 GitHub Pages Deployment

Deployment is automated via GitHub Actions:
- Push changes to the `main` branch on GitHub.
- The workflow at `.github/workflows/deploy.yml` publishes the root folder (`index.html`, `css/`, `js/`, `resume.pdf`) directly to GitHub Pages.
