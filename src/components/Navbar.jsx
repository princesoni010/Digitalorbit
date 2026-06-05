import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { cn } from '../utils/cn';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Entrance animation
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.to(menuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
        display: 'block'
      });
      gsap.fromTo(
        '.mobile-link',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: 'power2.out', delay: 0.1 }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = 'none';
        }
      });
    }
  }, [mobileMenuOpen]);

  return (
    <nav 
      ref={navRef}
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-heading font-bold text-gradient">
          
          DigitalOrbit
        </div>
        <div className="hidden md:flex gap-8 items-center font-medium">
          <a href="#services" className="text-text hover:text-accent transition-colors">Services</a>
          <a href="#portfolio" className="text-text hover:text-accent transition-colors">Portfolio</a>
          <a href="#process" className="text-text hover:text-accent transition-colors">Process</a>
          <a href="#contact" className="px-6 py-2.5 bg-text hover:bg-accent text-white rounded-full transition-colors shadow-soft">
            Let's Talk
          </a>
        </div>

        <button 
          className="md:hidden text-text p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={menuRef} 
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
        style={{ display: 'none', height: 0, opacity: 0 }}
      >
        <div className="flex flex-col px-6 py-6 gap-4">
          <a href="#services" className="mobile-link text-lg font-medium text-text py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#portfolio" className="mobile-link text-lg font-medium text-text py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#process" className="mobile-link text-lg font-medium text-text py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Process</a>
          <a href="#contact" className="mobile-link mt-4 text-center px-6 py-3 bg-accent text-white rounded-full font-medium shadow-soft" onClick={() => setMobileMenuOpen(false)}>
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
