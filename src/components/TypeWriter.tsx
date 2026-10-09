"use client";

import { useState, useEffect, useCallback } from "react";

interface TypeWriterProps {
  words: readonly string[] | string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypeWriter({
  words,
  typingSpeed = 40,
  deletingSpeed = 30,
  pauseDuration = 2000,
  className = "",
}: TypeWriterProps) {
  // Initialize with first word so initial SSR HTML is SEO-friendly and non-empty
  const [text, setText] = useState(words[0] || "Full Stack Developer");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const tick = useCallback(() => {
    if (!words || words.length === 0) return;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
      return;
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [text, wordIndex, isDeleting, words, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{text}</span>
      <span
        className="inline-block w-[2px] h-[1.1em] bg-primary ml-1 align-middle rounded-full"
        style={{ opacity: showCursor ? 1 : 0 }}
      />
    </span>
  );
}
