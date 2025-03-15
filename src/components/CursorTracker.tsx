
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CursorTrackerProps {
  className?: string;
}

export function CursorTracker({ className }: CursorTrackerProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Add slight delay before showing cursor to prevent jump on page load
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 500);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === 'A' || 
        (e.target as HTMLElement).tagName === 'BUTTON' ||
        (e.target as HTMLElement).closest('a') ||
        (e.target as HTMLElement).closest('button') ||
        (e.target as HTMLElement).classList.contains('hoverable')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === 'A' || 
        (e.target as HTMLElement).tagName === 'BUTTON' ||
        (e.target as HTMLElement).closest('a') ||
        (e.target as HTMLElement).closest('button') ||
        (e.target as HTMLElement).classList.contains('hoverable')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      clearTimeout(timer);
    };
  }, []);

  if (!isActive) return null;

  return (
    <motion.div
      className={cn(
        "fixed pointer-events-none z-50 mix-blend-difference",
        className
      )}
      animate={{
        x: mousePosition.x - (isHovering ? 30 : 20),
        y: mousePosition.y - (isHovering ? 30 : 20),
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      <motion.div
        className="rounded-full bg-primary/80 backdrop-blur-sm"
        initial={{ width: 40, height: 40 }}
        animate={{ 
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          scale: isHovering ? [1, 1.2, 1] : [0.8, 1.1, 0.8], 
          opacity: isHovering ? 0.9 : [0.8, 0.4, 0.8] 
        }}
        transition={{
          duration: isHovering ? 0.3 : 2,
          repeat: isHovering ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
