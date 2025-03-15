
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SkillItemProps {
  name: string;
  icon: ReactNode;
  logo?: string;
  className?: string;
  index?: number;
}

export function SkillItem({ name, icon, logo, className, index = 0 }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={cn(
        "flex flex-col items-center justify-center p-6 rounded-xl glass card-hover text-center",
        className
      )}
    >
      {logo ? (
        <div className="mb-3 h-12 w-12 flex items-center justify-center">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="max-h-full max-w-full object-contain" 
          />
        </div>
      ) : (
        <div className="mb-3 text-primary text-3xl">{icon}</div>
      )}
      <span className="font-medium">{name}</span>
    </motion.div>
  );
}
