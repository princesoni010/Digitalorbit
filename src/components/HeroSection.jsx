import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import { useScrollReveal, useTextReveal } from '../hooks/useScrollAnimations';


const slides = [
  {
    url: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    title: "Creative Excellence",
    subtitle: "Designing the future of web"
  },
  {
    url: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Premium Resorts",
    subtitle: "website for Luxury & Stay experiences"
  },
  {
    url: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    title: "Modern Fitness",
    subtitle: "website for gym owner"
  },
  {
  url: "/DO.png",
  title: "branding",
  subtitle: "promotional ads"
}
];

export default function HeroSection() {
  const containerRef = useScrollReveal();
  const headingRef = useTextReveal();
  

  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500); 

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center pt-24 pb-12 px-6 relative overflow-hidden">
      <ThreeBackground />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div>
          <div className="reveal-up flex gap-3 mb-6">
            <span className="px-4 py-1.5 text-sm font-medium border border-accent/20 bg-accent/5 text-accent rounded-full shadow-sm">
              Premium Digital Agency ✦
            </span>
          </div>
          
          <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-text">
            We Build Digital Experiences That <span className="text-gradient">Grow Businesses.</span>
          </h1>
          
          <p className="reveal-up text-lg text-text-muted mb-8 max-w-lg leading-relaxed">
            Premium websites and creative advertising solutions designed to help modern brands stand out online and convert visitors into customers.
          </p>
          
          <div className="reveal-up flex flex-wrap gap-4 mb-12">
            <a href="#portfolio" className="px-8 py-4 bg-accent hover:bg-accent-light text-white rounded-full font-semibold transition-all shadow-glass hover:shadow-glass-hover flex items-center gap-2 group">
              View Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-surface border border-gray-200 hover:border-accent/30 text-text rounded-full font-semibold transition-all shadow-sm hover:shadow-md">
              Start Your Project
            </a>
          </div>
        </div>

        <div className="reveal-left relative h-[500px] hidden md:flex items-center justify-center">
          {/* Main Visual Screen - Slideshow Container */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-t from-text/80 to-transparent z-10"></div>
            
            {/* Map lagakar saari images ko stack kiya hai aur opacity se hide/show kiya hai smooth effect ke liye */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={slide.url} 
                  alt={slide.title} 
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                  <p className="font-semibold text-lg mb-1">{slide.title}</p>
                  <p className="text-sm opacity-80">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute top-12 right-0 glass-card px-5 py-4 rounded-2xl animate-float">
            <p className="text-xs text-text-muted uppercase font-bold tracking-wider mb-1">Growth</p>
            <h3 className="text-2xl font-bold text-emerald-500">+245%</h3>
          </div>

          <div className="absolute bottom-16 -left-4 glass-card px-5 py-4 rounded-2xl animate-float" style={{ animationDelay: '1.5s' }}>
            <p className="text-xs text-text-muted uppercase font-bold tracking-wider mb-1">Conversions</p>
            <h3 className="text-2xl font-bold text-accent">+89%</h3>
          </div>
        </div>
      </div>
    </section>
  );
}