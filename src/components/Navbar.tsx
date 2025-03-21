
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Link as ScrollLink } from "react-scroll";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark') || 
           window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    
    // Set initial dark mode from localStorage or system preference
    const darkModePreference = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (darkModePreference === 'true' || (darkModePreference === null && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
      setIsDarkMode(true);
    }
  };

  const navLinks = [{
    name: "About",
    target: "about"
  }, {
    name: "Skills",
    target: "skills"
  }, {
    name: "Projects",
    target: "projects"
  }, {
    name: "Experience",
    target: "experience"
  }, {
    name: "Contact",
    target: "contact"
  }];
  
  return <nav className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300", scrolled ? "py-3 glass border-b border-white/10" : "py-5 bg-transparent")}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <ScrollLink to="hero" smooth={true} duration={500} className="text-2xl font-display font-bold tracking-tight relative cursor-pointer glow">
            <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-gradient text-5xl">Koustav Manna</button>
          </ScrollLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => <ScrollLink key={link.target} to={link.target} spy={true} smooth={true} offset={-100} duration={500} className="px-4 py-2 text-foreground/80 hover:text-foreground rounded-md transition-colors duration-300 cursor-pointer link-underline" activeClass="text-primary font-medium">
                {link.name}
              </ScrollLink>)}

            {/* Dark Mode Toggle */}
            <button 
              className="p-2 ml-2 rounded-full hover:bg-accent transition-colors duration-300"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <Button variant="primary" size="sm" className="ml-4" onClick={() => window.open("https://drive.google.com/file/d/13oyedwIEqMVE5lgL4s5EERRef0d12S9q/view?usp=sharing", "_blank")}>
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle for Mobile */}
            <button 
              className="p-2 rounded-full hover:bg-accent transition-colors duration-300"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button className="p-2 rounded-full hover:bg-accent transition-colors duration-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden fixed inset-0 pt-20 bg-background/95 backdrop-blur-lg transition-transform duration-300 ease-in-expo z-40", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
      {/* Close button positioned at the top right */}
      <button 
           className="absolute top-12 right-4 p-2 rounded-full bg-accent/50 hover:bg-accent transition-colors duration-300"
           onClick={() => setMobileMenuOpen(false)}
           aria-label="Close menu"
         >
           <X className="h-6 w-6" />
         </button>
        <div className="flex flex-col items-center space-y-6 p-8">
          {navLinks.map(link => <ScrollLink key={link.target} to={link.target} spy={true} smooth={true} offset={-100} duration={500} className="text-xl font-medium py-2 cursor-pointer hover:text-primary transition-colors duration-300" activeClass="text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </ScrollLink>)}

          <Button variant="primary" size="md" className="mt-8" onClick={() => {
          window.open("https://drive.google.com/file/d/13oyedwIEqMVE5lgL4s5EERRef0d12S9q/view?usp=sharing", "_blank");
          setMobileMenuOpen(false);
        }}>
            Resume
          </Button>
        </div>
      </div>
    </nav>;
}
