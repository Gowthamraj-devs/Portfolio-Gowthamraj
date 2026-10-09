# Gowthamraj G — Personal Developer Portfolio

Personal developer portfolio website of **Gowthamraj G**, Web Developer & B.Sc Computer Science Student at Nandha Arts and Science College (Autonomous), Erode, Tamil Nadu.

🌐 **Live Website**: [https://gowthamraj-devs.github.io/Portfolio-Gowthamraj/](https://gowthamraj-devs.github.io/Portfolio-Gowthamraj/)

---

## 🛠️ My Core Skills & Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend & Core Languages**: Python, Node.js, C, Java
- **Database**: SQL (Relational Databases)
- **Tools**: Git, GitHub, VS Code

---

## 📂 Simplified Project Structure (Vanilla Stack)

```
portfolio/
├── index.html              # Main HTML5 page (all sections, semantic tags, metadata)
├── css/
│   └── styles.css          # Theme variables, glassmorphism, keyframes, timeline, responsive layout
├── js/
│   ├── data.js             # Personal details, skills, projects, and education data
│   ├── boot.js             # Terminal boot sequence script
│   ├── typewriter.js       # Animated role typewriter script
│   ├── editor.js           # Animated VS Code code typing script
│   ├── navbar.js           # Scroll progress, active link observer, and mobile menu drawer
│   ├── reveal.js           # Scroll reveal transitions script
│   ├── projects.js         # Collapsible feature lists script
│   ├── contact.js          # Contact form handler script
│   ├── main.js             # Main entry script that renders section content from data.js
│   └── backgrounds/        # Visual background scripts (Matrix rain, particles, floating code, mouse glow)
├── assets/
│   └── favicon.ico         # Favicon icon
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages workflow (deploys index.html directly)
```

---

## 💻 How to Edit and Run Your Portfolio in VS Code

### 1. Opening and Previewing Locally
1. Open the project folder in **VS Code**.
2. To view your website, double-click `index.html` to open it in Google Chrome or Microsoft Edge (or right-click `index.html` and select **Open with Live Server** if you use the Live Server extension).
3. **No build step, npm commands, or server compilation needed!**

### 2. How to Edit Your Portfolio Content
- **Personal Info, Skills, & Projects:**  
  Open [`js/data.js`](js/data.js) and update text inside `PERSONAL`, `SKILLS`, `PROJECTS`, `EXPERIENCES`, `EDUCATION`, or `CERTIFICATES`.
- **Website Styles, Colors, & Themes:**  
  Open [`css/styles.css`](css/styles.css) to modify CSS variables (like `--color-primary`) or styling rules.
- **Page Layout & Section Order:**  
  Open [`index.html`](index.html) to modify HTML tags, headings, or section placement.

---

## 🌐 GitHub Pages Deployment

Deployment is automated via GitHub Actions:
- Simply push your changes to the `main` branch on GitHub.
- The workflow at `.github/workflows/deploy.yml` publishes the root folder containing `index.html`, `css/`, and `js/` directly to GitHub Pages.
