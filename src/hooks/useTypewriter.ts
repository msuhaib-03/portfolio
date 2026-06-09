"use client";
import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  phrases:       string[];
  typingSpeed?:  number; // ms per char
  deletingSpeed?:number;
  pauseMs?:      number; // pause after full phrase
}

export function useTypewriter({
  phrases,
  typingSpeed  = 70,
  deletingSpeed = 40,
  pauseMs      = 1800,
}: UseTypewriterOptions) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing,  setIsPausing]  = useState(false);

  const tick = useCallback(() => {
    const current = phrases[phraseIdx % phrases.length];

    if (isPausing) return;

    if (!isDeleting) {
      if (displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else {
        setIsPausing(true);
        setTimeout(() => {
          setIsPausing(false);
          setIsDeleting(true);
        }, pauseMs);
      }
    } else {
      if (displayed.length > 0) {
        setDisplayed(current.slice(0, displayed.length - 1));
      } else {
        setIsDeleting(false);
        setPhraseIdx(i => (i + 1) % phrases.length);
      }
    }
  }, [displayed, isDeleting, isPausing, phraseIdx, phrases, pauseMs]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return { displayed, isDeleting };
}
