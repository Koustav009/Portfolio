
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
}

export function Section({ 
  children, 
  className, 
  id, 
  fullHeight = false,
  ...props 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "w-full section-padding relative",
        {
          "min-h-screen flex items-center": fullHeight
        },
        className
      )}
      {...props}
    >
      <div className="noise-bg" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}
