
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  speed?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  once = true,
  delay = 0,
  speed = 0.05,
  tag = "span"
}: AnimatedTextProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.2,
  });

  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const Tag = tag;

  useEffect(() => {
    if (!inView) return;

    const words = wordsRef.current;
    words.forEach((word, index) => {
      const letters = word.querySelectorAll("span");
      letters.forEach((letter, letterIndex) => {
        setTimeout(() => {
          letter.classList.add("animate-text-reveal");
          letter.style.animationDelay = `${delay + index * 0.1 + letterIndex * speed}s`;
        }, 10);
      });
    });
  }, [inView, delay, speed]);

  const renderWords = () => {
    const words = text.split(" ");
    return words.map((word, index) => {
      const letters = word.split("");
      return (
        <span
          key={index}
          ref={(el) => {
            if (el) wordsRef.current[index] = el;
          }}
          className="inline-block mr-2"
        >
          {letters.map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className="inline-block opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              {letter}
            </span>
          ))}
        </span>
      );
    });
  };

  return (
    <Tag ref={ref} className={cn("reveal-text", className)}>
      {renderWords()}
    </Tag>
  );
}
