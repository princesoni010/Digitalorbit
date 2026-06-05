import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import gsap from 'gsap';
import { useScrollReveal } from '../hooks/useScrollAnimations';

export default function Testimonials() {
  const containerRef = useScrollReveal();
  const slidesRef = useRef([]);

  const testimonials = [
    { name: "Rohan Mehta", role: "Restaurant Owner", text: "DigitalOrbit delivered an amazing website that perfectly represents our brand. It has directly increased our reservations. Highly recommended!" },
    { name: "Anjali Verma", role: "Photographer", text: "The creative designs and attention to detail are outstanding. They understood my vision perfectly. Will definitely work with them again!" },
    { name: "Karan Singh", role: "Gym Owner", text: "Professional, fast and very easy to work with. Loved the final result. Our gym's online presence has never looked better!" }
  ];

  const [current, setCurrent] = useState(0);

  // GSAP animation for slide changes
  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;
      
      if (index === current) {
        gsap.to(slide, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          display: 'block'
        });
      } else {
        gsap.to(slide, {
          opacity: 0,
          x: 40,
          scale: 0.95,
          duration: 0.6,
          ease: 'power3.out',
          onComplete: () => {
            slide.style.display = 'none';
          }
        });
      }
    });
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50 z-0"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="reveal-up text-4xl md:text-5xl font-bold mb-12 text-text">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>
        
        <div className="reveal-up">
          <Quote className="w-12 h-12 text-accent/30 mx-auto mb-8 transform -scale-x-100" />
        </div>
        
        <div className="reveal-up relative h-64 md:h-48 mb-8">
          {testimonials.map((test, index) => (
            <div 
              key={index}
              ref={el => slidesRef.current[index] = el}
              className="absolute top-0 left-0 w-full"
              style={{ opacity: index === 0 ? 1 : 0, display: index === 0 ? 'block' : 'none' }}
            >
              <p className="text-xl md:text-3xl font-medium leading-relaxed mb-8 text-text italic">
                "{test.text}"
              </p>
              <div>
                <div className="font-bold text-lg text-text">{test.name}</div>
                <div className="text-sm font-semibold text-accent uppercase tracking-wider mt-1">{test.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-up flex justify-center gap-4 mt-8">
          <button 
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full bg-surface border border-gray-100 shadow-sm flex items-center justify-center hover:bg-gray-50 hover:text-accent hover:border-accent/30 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full bg-surface border border-gray-100 shadow-sm flex items-center justify-center hover:bg-gray-50 hover:text-accent hover:border-accent/30 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
