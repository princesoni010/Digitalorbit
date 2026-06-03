import { useState, useEffect } from 'react';
import { cn } from '../utils/cn';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-40 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-heading font-bold text-gradient">
          DigitalOrbit
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
          <a href="#process" className="hover:text-accent transition-colors">Process</a>
        </div>
        <button className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all">
          Let's Talk
        </button>
      </div>
    </nav>
  );
}
