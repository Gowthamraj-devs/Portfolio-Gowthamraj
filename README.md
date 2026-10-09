# Gowthamraj G — Personal Developer Portfolio

Personal developer portfolio website of **Gowthamraj G**, Web Developer & B.Sc Computer Science Student at Nandha Arts and Science College, Erode, Tamil Nadu.

🌐 **Live Website**: [https://gowthamraj-devs.github.io/Portfolio-Gowthamraj/](https://gowthamraj-devs.github.io/Portfolio-Gowthamraj/)

---

## 🛠️ My Core Skills & Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend & Core Languages**: Python, Node.js, C, Java
- **Database**: SQL (Relational Databases)
- **Tools**: Git, GitHub, VS Code

---

## 📂 Project Structure Overview

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── resume.pdf              # Real resume PDF location
│   └── projects/               # Project screenshots directory
├── src/
│   ├── app/
│   │   ├── globals.css         # Styling, themes, and CSS keyframe animations
│   │   ├── layout.tsx          # Page metadata, fonts, SEO
│   │   └── page.tsx            # Portfolio section layout
│   ├── components/
│   │   ├── backgrounds/        # Visual background components
│   │   ├── sections/           # Portfolio sections (Hero, About, Skills, Projects, etc.)
│   │   ├── Footer.tsx
│   │   ├── GlowCard.tsx
│   │   ├── LoadingScreen.tsx   # Fast skippable boot screen
│   │   ├── Navbar.tsx          # Navigation, progress bar, mobile menu
│   │   ├── Reveal.tsx          # Scroll reveal animation wrapper
│   │   ├── TypeWriter.tsx      # Typewriter effect component
│   │   └── VSCodeEditor.tsx    # Python code editor component
│   └── lib/
│       └── constants.ts        # Centralized personal info, skills, projects, and services
├── next.config.ts              # Static export & GitHub Pages basePath configuration
├── package.json
└── tsconfig.json
```

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Lint check**:
   ```bash
   npm run lint
   ```

4. **Production Build & Static Export**:
   ```bash
   npm run build
   ```
   The static site HTML files will be generated in the `out/` directory.

---

## 🌐 Deployment to GitHub Pages

Deployment is automated via GitHub Actions:
- Pushing changes to the `main` branch automatically triggers `.github/workflows/deploy.yml`.
- The site is hosted directly at: `https://gowthamraj-devs.github.io/Portfolio-Gowthamraj/`.
