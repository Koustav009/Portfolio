
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  className?: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl,
  className,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "rounded-2xl overflow-hidden group perspective hover:rotate-y-10",
        className
      )}
    >
      <div className="rotate-y preserve-3d">
        <div className="relative rounded-2xl overflow-hidden glass border border-white/10">
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-expo"
            />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-foreground/70 mb-4">{description}</p>
            <div className="flex items-center gap-3">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-accent transition-colors duration-300"
                  aria-label="View repository"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium link-underline"
                  aria-label="View live project"
                >
                  Live Demo <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
