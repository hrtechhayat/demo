import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutBento } from './components/AboutBento';
import { ProjectShowcase } from './components/ProjectShowcase';
import { EducationTimeline } from './components/EducationTimeline';
import { GatewaysDock } from './components/GatewaysDock';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { PERSONAL_INFO } from './data';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Keyboard shortcut to launch terminal: ` or ~ or Ctrl+K / Cmd+K
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'education', 'gateways'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 150;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient System GIF and Cyber Gradient Overlay from User's original spec */}
      <div
        className="fixed inset-0 pointer-events-none -z-20 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 7, 10, 0.94), rgba(5, 7, 10, 0.90)), url('${PERSONAL_INFO.ambientGif}')`,
        }}
      />

      {/* Cyberpunk Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none -z-10 cyber-grid opacity-75" />

      {/* Primary Navigation */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <AboutBento />
        <ProjectShowcase />
        <EducationTimeline />
        <GatewaysDock />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Developer Terminal HUD */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
