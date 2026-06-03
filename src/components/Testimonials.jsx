import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: "Rohan Mehta", role: "Restaurant Owner", text: "DigitalOrbit delivered an amazing website that perfectly represents our brand. Highly recommended!" },
    { name: "Anjali Verma", role: "Photographer", text: "The creative designs and attention to detail are outstanding. Will work again!" },
    { name: "Karan Singh", role: "Gym Owner", text: "Professional, fast and very easy to work with. Loved the final result!" }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-6 bg-primary-100/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">What Our <span className="text-gradient">Clients Say</span></h2>
        
        <Quote className="w-12 h-12 text-primary-200/50 mx-auto mb-8" />
        
        <div className="relative h-48 md:h-40">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className={`absolute top-0 left-0 w-full transition-all duration-700 ${index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}
            >
              <p className="text-xl md:text-3xl font-medium leading-relaxed mb-8">"{test.text}"</p>
              <div>
                <div className="font-bold text-lg">{test.name}</div>
                <div className="text-sm text-accent">{test.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
