import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const textRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "/1.png",
    "/3.png",
    "/2.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div ref={textRef}>
          <div className="flex gap-3 mb-6">
            <span className="px-4 py-1.5 text-sm font-medium border border-white/20 rounded-full glass-card text-accent">Digital Agency ✦</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            We Build Digital Experiences That <span className="text-gradient">Grow Businesses.</span>
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-lg">
            Premium websites and creative advertising solutions designed to help modern brands stand out online.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-100 to-primary-300 hover:from-primary-200 hover:to-primary-400 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              View Portfolio
            </button>
            <button className="px-8 py-4 border-2 border-white/20 hover:border-white/40 hover:bg-white/5 rounded-full font-bold transition-all">
              Start Your Project
            </button>
          </div>
          <div className="pt-8 border-t border-white/10">
            {/* <p className="text-sm text-white/50 mb-3">Trusted by modern brands for</p> */}
            <div className="flex gap-3">
              {/* <span className="text-sm text-white/70 font-medium">Web Design</span>
              <span className="text-white/30">•</span>
              <span className="text-sm text-white/70 font-medium">Creative Ads</span> */}
            </div>
          </div>
        </div>
       <div className="relative h-[500px] hidden md:flex items-center justify-center">

  {/* Background Glow */}
  <div className="absolute w-96 h-96 bg-primary-200/20 blur-3xl rounded-full"></div>

  {/* Laptop Mockup */}
  <div className="relative w-[420px] glass-card rounded-3xl border border-white/10 p-4 shadow-2xl rotate-[-6deg] hover:rotate-0 transition-all duration-500">

    {/* Browser Bar */}
    <div className="flex gap-2 mb-4">
      <div className="w-3 h-3 rounded-full bg-red-400"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-400"></div>
    </div>

    {/* Website Preview */}
    <div className="h-[240px] rounded-2xl bg-black/40 overflow-hidden relative border border-white/5">
      <AnimatePresence>
        <motion.img
          key={currentSlide}
          src={slides[currentSlide]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      </AnimatePresence>
    </div>
  </div>

  {/* Analytics Card */}
  <div className="absolute top-12 right-0 glass-card p-4 rounded-2xl border border-white/10 animate-float">
    <p className="text-sm text-white/60">Growth</p>
    <h3 className="text-2xl font-bold text-green-400">+245%</h3>
  </div>

  {/* Conversion Card */}
  <div className="absolute bottom-16 left-0 glass-card p-4 rounded-2xl border border-white/10 animate-float">
    <p className="text-sm text-white/60">Conversions</p>
    <h3 className="text-2xl font-bold text-accent">+89%</h3>
  </div>

  {/* Service Badges */}
  <div className="absolute top-20 left-10 px-4 py-2 rounded-full glass-card border border-white/10 text-sm">
    Web Design
  </div>

  <div className="absolute bottom-10 right-12 px-4 py-2 rounded-full glass-card border border-white/10 text-sm">
    Creative Ads
  </div>

  <div className="absolute top-52 right-[-20px] px-4 py-2 rounded-full glass-card border border-white/10 text-sm">
    Branding
  </div>

</div>
      </div>
    </section>
  );
}
