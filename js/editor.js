/**
 * VS CODE EDITOR COMPONENT (js/editor.js)
 * Animates Python code typing with syntax highlighting.
 */

document.addEventListener("DOMContentLoaded", () => {
  const codeContainer = document.getElementById("vscode-code-content");
  const lineNumbersContainer = document.getElementById("vscode-line-numbers");
  if (!codeContainer || !lineNumbersContainer) return;

  const pythonCode = `class GowthamrajG:

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

  const lines = pythonCode.split("\n");
  
  // Render line numbers
  lineNumbersContainer.innerHTML = lines
    .map((_, idx) => `<div class="text-[#858585] text-right text-xs leading-6 select-none">${idx + 1}</div>`)
    .join("");

  // Simple Python Syntax Tokenizer
  function highlightLine(lineText) {
    let html = lineText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Strings
    html = html.replace(/(".*?"|'.*?')/g, '<span class="syntax-string">$1</span>');
    // Keywords
    html = html.replace(/\b(class|def|return|self|import|from|print)\b/g, '<span class="syntax-keyword">$1</span>');
    // Builtins & Types
    html = html.replace(/\b(GowthamrajG|StudentProfile)\b/g, '<span class="syntax-class">$1</span>');
    html = html.replace(/\b(__init__|build_project)\b/g, '<span class="syntax-function">$1</span>');
    // Comments
    html = html.replace(/(#.*)/g, '<span class="syntax-comment">$1</span>');

    return html;
  }

  let currentCharIndex = 0;
  
  function renderCode() {
    const currentText = pythonCode.substring(0, currentCharIndex);
    const currentLines = currentText.split("\n");

    codeContainer.innerHTML = currentLines
      .map((lineText, idx) => {
        const isLastLine = idx === currentLines.length - 1;
        const highlighted = highlightLine(lineText);
        return `<div class="whitespace-pre text-xs sm:text-sm leading-6">${highlighted}${
          isLastLine ? '<span class="inline-block w-[2px] h-[16px] bg-[#aeafad] align-text-bottom ml-[1px] animate-pulse"></span>' : ''
        }</div>`;
      })
      .join("");

    if (currentCharIndex < pythonCode.length) {
      currentCharIndex++;
      setTimeout(renderCode, 35);
    } else {
      // Pause then restart typing loop
      setTimeout(() => {
        currentCharIndex = 0;
        renderCode();
      }, 4000);
    }
  }

  renderCode();
});
