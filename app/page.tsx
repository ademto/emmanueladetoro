"use client";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Yikora",
    url: "https://yikora.com",
    domain: "yikora.com",
    description: "A social platform for campus life, connecting students and communities.",
  },
  {
    title: "Demtos Clip",
    url: "https://clip.demtos.com",
    domain: "clip.demtos.com",
    description: "AI-powered sermon clipping and content generation tool.",
  },
  {
    title: "Demtos",
    url: "https://demtos.com",
    domain: "demtos.com",
    description: "Church management software for modern organizations.",
  },
];

const socials = [
  { icon: FiGithub, href: "https://github.com", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://x.com", label: "X" },
];

export default function Home() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top <= 200) {
          setActive("projects");
        } else {
          setActive("hero");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end px-6 sm:px-12 pt-10 max-w-5xl mx-auto">
        <div className="flex items-center gap-8">
          <Link
            href="#hero"
            className={`text-sm transition-colors ${
              active === "hero" ? "text-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="#projects"
            className={`text-sm transition-colors ${
              active === "projects" ? "text-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            Projects
          </Link>
        </div>
      </nav>

      {/* Hero — full screen */}
      <section id="hero" className="flex flex-col justify-center px-6 sm:px-12 lg:px-24 h-screen max-w-5xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Emmanuel Adetoro
        </h1>
        <p className="text-sm sm:text-base text-muted mt-3">
          Founder of <Link href="https://yikora.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Yikora</Link>.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 sm:px-12 lg:px-24 pb-32 max-w-5xl mx-auto w-full">
        <h3 className="text-2xl font-bold text-foreground mb-4">Projects</h3>
        <div className="border-t border-card-border" />

        <div className="flex flex-col">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between py-8 border-b border-card-border"
            >
              <div className="flex flex-col gap-1 border-l-2 border-transparent group-hover:border-foreground pl-5 transition-colors">
                <h4 className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors">
                  {project.title}
                </h4>
                <span className="text-xs font-mono uppercase tracking-wider text-muted">
                  {project.domain}
                </span>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
              <span className="text-muted group-hover:text-foreground transition-colors mt-1 ml-4 shrink-0">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 w-full flex items-center justify-center gap-6 py-5 z-50 bg-background/80 backdrop-blur-sm">
        {socials.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted hover:text-foreground transition-colors"
          >
            <Icon size={20} />
          </Link>
        ))}
      </footer>
    </div>
  );
}
