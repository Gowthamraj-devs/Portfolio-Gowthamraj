"use client";

import { useState, useEffect, useCallback } from "react";
import { VSCODE_CODE } from "@/lib/constants";

// Tokenize Python code for syntax highlighting
function tokenize(code: string): Array<{ text: string; className: string }> {
  const tokens: Array<{ text: string; className: string }> = [];
  const keywords = new Set(["class", "def", "self", "while", "True", "return", "import", "from", "if", "else", "for", "in", "not", "and", "or", "None", "False", "pass", "break", "continue"]);
  const builtins = new Set(["print", "len", "range", "int", "str", "list", "dict", "set", "type"]);

  let i = 0;
  while (i < code.length) {
    // Strings
    if (code[i] === '"' || code[i] === "'") {
      const quote = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== quote) j++;
      j++; // include closing quote
      tokens.push({ text: code.slice(i, j), className: "syntax-string" });
      i = j;
      continue;
    }

    // Comments
    if (code[i] === "#") {
      let j = i;
      while (j < code.length && code[j] !== "\n") j++;
      tokens.push({ text: code.slice(i, j), className: "syntax-comment" });
      i = j;
      continue;
    }

    // Brackets
    if (code[i] === "[" || code[i] === "]") {
      tokens.push({ text: code[i], className: "syntax-bracket" });
      i++;
      continue;
    }

    // Parens
    if (code[i] === "(" || code[i] === ")") {
      tokens.push({ text: code[i], className: "syntax-paren" });
      i++;
      continue;
    }

    // Operators and punctuation
    if ("=:.,+*-/{}".includes(code[i])) {
      tokens.push({ text: code[i], className: "syntax-operator" });
      i++;
      continue;
    }

    // Words
    if (/[a-zA-Z_]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z_0-9]/.test(code[j])) j++;
      const word = code.slice(i, j);

      if (keywords.has(word)) {
        if (word === "class") tokens.push({ text: word, className: "syntax-keyword" });
        else if (word === "def") tokens.push({ text: word, className: "syntax-keyword" });
        else if (word === "self") tokens.push({ text: word, className: "syntax-self" });
        else if (word === "True" || word === "False") tokens.push({ text: word, className: "syntax-bool" });
        else if (word === "None") tokens.push({ text: word, className: "syntax-constant" });
        else if (word === "while") tokens.push({ text: word, className: "syntax-keyword" });
        else tokens.push({ text: word, className: "syntax-keyword" });
      } else if (builtins.has(word)) {
        tokens.push({ text: word, className: "syntax-builtin" });
      } else {
        // Check if it's a function/method call (next non-space char is '(')
        let k = j;
        while (k < code.length && code[k] === " ") k++;
        if (code[k] === "(") {
          tokens.push({ text: word, className: "syntax-function" });
        } else if (word === "Developer") {
          tokens.push({ text: word, className: "syntax-class" });
        } else {
          tokens.push({ text: word, className: "syntax-variable" });
        }
      }
      i = j;
      continue;
    }

    // Default
    tokens.push({ text: code[i], className: "" });
    i++;
  }

  return tokens;
}

export default function VSCodeEditor() {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullCode = VSCODE_CODE;

  const tick = useCallback(() => {
    setDisplayedLength((prev) => {
      if (prev >= fullCode.length) {
        // Reset after a pause
        setTimeout(() => setDisplayedLength(0), 3000);
        return prev;
      }
      return prev + 1;
    });
  }, [fullCode.length]);

  useEffect(() => {
    const timer = setInterval(tick, 50);
    return () => clearInterval(timer);
  }, [tick]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const displayedCode = fullCode.slice(0, displayedLength);
  const lines = displayedCode.split("\n");
  const totalLines = fullCode.split("\n").length;

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.1), 0 25px 50px rgba(0, 0, 0, 0.5)" }}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1e1e1e] border-b border-[#333]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-[#808080] font-mono">developer.py — Portfolio</span>
        <div className="w-16" />
      </div>

      {/* Tab bar */}
      <div className="flex bg-[#252526] border-b border-[#333]">
        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#1e1e1e] border-r border-[#333] border-t-2 border-t-primary text-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#3572A5]">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[#cccccc] font-mono text-xs">developer.py</span>
        </div>
      </div>

      {/* Code area */}
      <div className="bg-[#1e1e1e] p-4 overflow-hidden" style={{ minHeight: 420, maxHeight: 480 }}>
        <div className="flex font-mono text-sm leading-6">
          {/* Line numbers */}
          <div className="pr-4 select-none text-right" style={{ minWidth: 40 }}>
            {Array.from({ length: totalLines }, (_, i) => (
              <div key={i} className="text-[#858585]" style={{ opacity: i < lines.length ? 1 : 0.3 }}>
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code */}
          <div className="flex-1 overflow-hidden">
            {lines.map((line, lineIdx) => {
              const tokens = tokenize(line);
              const isLastLine = lineIdx === lines.length - 1;
              return (
                <div key={lineIdx} className="whitespace-pre">
                  {tokens.map((token, tokenIdx) => (
                    <span key={tokenIdx} className={token.className}>
                      {token.text}
                    </span>
                  ))}
                  {isLastLine && (
                    <span
                      className="inline-block w-[2px] h-[18px] bg-[#aeafad] align-text-bottom ml-[1px]"
                      style={{ opacity: showCursor ? 1 : 0 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-1 bg-[#007acc] text-white text-xs font-mono">
        <div className="flex items-center gap-3">
          <span>🐍 Python</span>
          <span>UTF-8</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Ln {lines.length}, Col {(lines[lines.length - 1]?.length || 0) + 1}</span>
          <span>Spaces: 4</span>
        </div>
      </div>
    </div>
  );
}
