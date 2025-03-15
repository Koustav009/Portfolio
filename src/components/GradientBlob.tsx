
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  colors?: string[];
  speed?: number;
  opacity?: number;
  size?: string;
}

export function GradientBlob({
  className,
  colors = ["rgba(125, 145, 255, 0.6)", "rgba(170, 111, 251, 0.6)"],
  speed = 8,
  opacity = 0.4,
  size = "60%",
}: GradientBlobProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number;
    let height: number;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth * dpr;
      height = canvas.offsetHeight * dpr;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const gradients = colors.map((color) => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const dirX = (Math.random() - 0.5) * 2;
      const dirY = (Math.random() - 0.5) * 2;
      return { color, x, y, dirX, dirY };
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Move gradient positions
      gradients.forEach((gradient) => {
        gradient.x += gradient.dirX * (speed / 10);
        gradient.y += gradient.dirY * (speed / 10);
        
        // Bounce off edges
        if (gradient.x <= 0 || gradient.x >= width) gradient.dirX *= -1;
        if (gradient.y <= 0 || gradient.y >= height) gradient.dirY *= -1;
      });
      
      // Draw radial gradients
      gradients.forEach((gradient) => {
        const rad = ctx.createRadialGradient(
          gradient.x,
          gradient.y,
          0,
          gradient.x,
          gradient.y,
          Math.min(width, height) * 0.4
        );
        rad.addColorStop(0, gradient.color);
        rad.addColorStop(1, "transparent");
        
        ctx.globalAlpha = opacity;
        ctx.fillStyle = rad;
        ctx.beginPath();
        ctx.arc(
          gradient.x,
          gradient.y,
          Math.min(width, height) * 0.4,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });
      
      requestIdRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [colors, opacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 -z-10 mask-radial", className)}
      style={{ width: size, height: size }}
    />
  );
}
