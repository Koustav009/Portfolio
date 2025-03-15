import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight, Code, ExternalLink, Github, Layers, Mail } from "lucide-react";
import { Element, animateScroll as scroll } from "react-scroll";
import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { GradientBlob } from "@/components/GradientBlob";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SkillItem } from "@/components/SkillItem";
import { SocialLinks } from "@/components/SocialLinks";
import { TimelineItem } from "@/components/TimelineItem";
import { motion, useScroll, useTransform } from "framer-motion";

import SpringBootIcon from "@/assets/icons8-spring-boot.svg";
import githubIcon from "@/assets/github.svg";
import Lenis from "@studio-freight/lenis";



const Index = () => {


  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.5,
  //     easing: (t) => 1 - Math.pow(1 - t, 4),
  //     smoothWheel: true,
  //     syncTouch: true,
  //     touchMultiplier: 2,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => lenis.destroy();
  // }, []);

  
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  
  const projectsData = [{
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and secure checkout.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/username/project"
  }, {
    title: "AI Content Generator",
    description: "An AI-powered tool that helps users generate various types of content like blog posts, product descriptions, etc.",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=1000",
    tags: ["Python", "TensorFlow", "React", "Flask"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/username/project"
  }, {
    title: "Real-time Chat Application",
    description: "A responsive chat application with real-time messaging, user authentication, and file sharing capabilities.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c2a4c?q=80&w=1000",
    tags: ["React", "Socket.io", "Firebase", "Tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/username/project"
  }];

  const experienceData = [{
    date: "Jan 2022 - Present",
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    description: "Leading development of cloud-based applications, mentoring junior developers, and implementing microservices architecture using React, Node.js, and AWS."
  }, {
    date: "Mar 2020 - Dec 2021",
    title: "Full Stack Developer",
    company: "Digital Innovations",
    description: "Developed and maintained multiple client projects using React, TypeScript, and Express, implemented CI/CD pipelines, and optimized application performance."
  }, {
    date: "Jun 2018 - Feb 2020",
    title: "Frontend Developer",
    company: "CreativeWeb Solutions",
    description: "Built responsive user interfaces using modern JavaScript frameworks, collaborated with designers, and integrated RESTful APIs."
  }];

  const skills = [
    {
      name: "Java",
      icon: <Code className="w-5 h-5" />,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    {
      name: "Spring",
      icon: <Code className="w-5 h-5" />,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
    }, 
    {
      name: "Spring Boot",
      icon: <Code className="w-8 h-8" />,
      logo: SpringBootIcon
    }, 
    {
      name: "Dart",
      icon: <Code className="w-5 h-5" />,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"
    }, 
    {
      name: "Flutter",
      icon: <Code className="w-5 h-5" />,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
    }, 
    {
      name: "HTML/CSS",
      icon: <Code className="w-5 h-5" />,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "JavaScript",
      icon: <Code className="w-5 h-5" />,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    }, 
    {
      name: "React",
      icon: <Code className="w-5 h-5" />,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    }, 
    {
      name: "MongoDB",
      icon: <Code className="w-5 h-5" />,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    }, 
    {
      name: "MySQL",
      icon: <Code className="w-5 h-5" />,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
    },
    // {
    //   name: "AWS",
    //   icon: <Code className="w-5 h-5" />,
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
    // }, 
    // {
    //   name: "Git",
    //   icon: <Code className="w-5 h-5" />,
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    // }
  ];

  return <div ref={scrollRef} className="relative overflow-hidden bg-dot-pattern">
      <Navbar />

      {/* Hero Section */}
      <Section fullHeight className="flex items-center justify-center pt-20">
        <motion.div style={{
        opacity,
        scale,
        y
      }} className="absolute inset-0 pointer-events-none">
          <GradientBlob className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" colors={["rgba(125, 145, 255, 0.6)", "rgba(170, 111, 251, 0.6)"]} size="80%" />
        </motion.div>

        <div className="text-center max-w-4xl mx-auto">

          {/* Software Engineer Text */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent text-primary font-medium text-md">
            Software Engineer
          </motion.div>
          
          <div className="mb-6">
            <AnimatedText text="Transforming  Creative  ideas  into  powerful  code" className="text-4xl md:text-6xl font-display font-bold text-balance leading-tight" tag="h1" delay={0.5} />
          </div>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 1.2
        }} className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            I'm Koustav Manna, a passionate software engineer specializing in creating elegant high-performance backend web applications with modern technologies.
          </motion.p>
          
          <motion.div initial={{
          opacity: 1,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 1.5
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" 
            icon={<Mail className="w-5 h-5" />} 
            onClick={() => document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth"
          })}
          className="w-56"
          >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              icon={<Github className="w-5 h-5" />} 
              onClick={() => window.open("https://github.com/Koustav009", "_blank")}
              className="border-2 border-primary w-55"
            >
              View My Work
            </Button>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 2
        }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-soft hidden md:block">
            <ArrowDown className="w-6 h-6 text-foreground/50" />
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Element name="about">
        <Section id="about" className="bg-accent/30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}>
              <div className="inline-block mb-5 px-4 py-1 rounded-full bg-accent text-accent-foreground text-md font-medium">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Turning ideas into{" "}
                <span className="text-gradient">real-world applications</span>
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Hello! I'm a passionate software engineer with over 5 years of experience in developing elegant, high-performance web applications. I specialize in both frontend and backend technologies, with a focus on creating responsive and intuitive user interfaces.
                </p>
                <p>
                  My journey in coding began during my computer science studies, where I fell in love with the process of bringing ideas to life through code. Since then, I've worked with startups and established companies alike, helping them build products that users love.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Button variant="primary" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right" onClick={() => window.open("/resume.pdf", "_blank")}>
                  View Resume
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }} className="perspective relative">
              <div className="relative rounded-2xl overflow-hidden glass border border-white/10 h-full aspect-square md:aspect-auto preserve-3d rotate-y hover:rotate-y-10">
                <img src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2000" alt="Profile" className="w-full h-full object-cover object-center" />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl border border-white/10 preserve-3d rotate-y-10">
                <p className="font-mono text-sm">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">developer</span>{" "}
                  <span className="text-primary">=</span>{" "}
                  <span className="text-accent-foreground">
                    &#123; passionate: <span className="text-primary">true</span> &#125;
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </Section>
      </Element>

      {/* Skills Section */}
      <Element name="skills">
        <Section id="skills">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-md font-medium">
              Skills & Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              My Professional <span className="text-gradient">Skillset</span>
            </h2>
            <p className="text-foreground/70">
              I've acquired a diverse range of skills throughout my career, focusing on modern web technologies and software development practices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <SkillItem 
                key={skill.name} 
                name={skill.name} 
                icon={skill.icon} 
                logo={skill.logo}
                index={index} 
              />
            ))}
          </div>
        </Section>
      </Element>

      {/* Projects Section */}
      <Element name="projects">
        <Section id="projects" className="bg-accent/30">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-md font-medium">
              Featured Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Recent <span className="text-gradient">Work</span>
            </h2>
            <p className="text-foreground/70">
              Here are some of my recent projects that showcase my skills and expertise in web development and software engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => <ProjectCard key={index} title={project.title} description={project.description} image={project.image} tags={project.tags} liveUrl={project.liveUrl} repoUrl={project.repoUrl} index={index} />)}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" icon={<ExternalLink className="w-4 h-4" />} onClick={() => window.open("https://github.com/yourusername", "_blank")}>
              View All Projects
            </Button>
          </div>
        </Section>
      </Element>

      {/* Experience Section */}
      <Element name="experience">
        <Section id="experience">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-md font-medium">
                Work Experience
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                My Professional <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Throughout my career, I've had the opportunity to work with amazing teams and contribute to impactful projects.
              </p>
            </div>

            <div className="relative">
              {experienceData.map((item, index) => <TimelineItem key={index} date={item.date} title={item.title} company={item.company} description={item.description} index={index} />)}
            </div>
          </div>
        </Section>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <Section id="contact" className="bg-gradient-to-b from-accent/30 to-background">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-md font-medium">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Let's Build Something <span className="text-gradient">Amazing</span> Together
              </h2>
              <p className="text-foreground/70 mb-8">
                I'm always open to new opportunities, collaborations, or just a friendly chat about technology and development.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <SocialLinks />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-primary" />
                    <span>your.email@example.com</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <ContactForm />
          </div>
        </Section>
      </Element>

      {/* Footer */}
      <footer className="py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <div className="text-2xl font-display font-bold">
              <span className="text-gradient">Koustav.</span>
            </div>
          </div>
          
          <div className="flex justify-center mb-6">
            <SocialLinks />
          </div>
          
          <div className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} | Designed & Built By Koustav Manna 🔥
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
