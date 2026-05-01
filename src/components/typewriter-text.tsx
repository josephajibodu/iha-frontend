"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
  className?: string;
}

export default function TypewriterText({
  phrases,
  typeSpeed = 75,
  deleteSpeed = 35,
  pauseMs = 2000,
  className,
}: TypewriterTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing"), 0);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), pauseMs);
      return () => clearTimeout(t);
    }

    // deleting
    if (text.length > 0) {
      const t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      return () => clearTimeout(t);
    }
    setPhraseIndex((i) => (i + 1) % phrases.length);
    setPhase("typing");
  }, [text, phase, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseMs]);

  return (
    <span className={cn("inline-block", className)} aria-live="polite">
      <span>{text}</span>
      {phase !== "pausing" && (
        <span className="inline-block w-[3px] h-[0.9em] align-middle ml-1 bg-current animate-[blink_1s_steps(2,start)_infinite]" />
      )}
      <style jsx>{`
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </span>
  );
}
