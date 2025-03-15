
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "left",
  className,
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300",
        {
          "w-full": fullWidth,
          "text-sm px-4 py-2": size === "sm",
          "text-base px-6 py-2.5": size === "md",
          "text-lg px-8 py-3": size === "lg",
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80": variant === "primary",
          "bg-secondary text-secondary-foreground hover:bg-secondary/70 active:bg-secondary/60": variant === "secondary",
          "border border-border hover:bg-accent hover:text-accent-foreground": variant === "outline",
          "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
          "opacity-60 pointer-events-none": disabled,
        },
        "group",
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span className="transition-all duration-300">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
      )}
      <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/10 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
    </button>
  );
}
