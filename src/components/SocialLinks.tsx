
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:your.email@example.com",
    },
  ];

  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="p-3 rounded-full glass hover:scale-110 transition-all duration-300 border border-white/10"
          aria-label={link.name}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
