
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  className?: string;
  index?: number;
}

export function TimelineItem({
  date,
  title,
  company,
  description,
  className,
  index = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("relative pl-8 pb-12", className)}
    >
      <div className="absolute left-0 top-0 h-full w-[1px] bg-border"></div>
      <div className="absolute left-[-5px] top-1 h-[10px] w-[10px] rounded-full bg-primary"></div>

      <div className="mb-1 text-sm font-medium text-muted-foreground">
        {date}
      </div>
      <h3 className="mb-1 text-xl font-bold">{title}</h3>
      <div className="mb-4 text-base text-accent-foreground font-medium">
        {company}
      </div>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
}
