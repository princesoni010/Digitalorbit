import { CheckCircle2 } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimations';

export default function WhyChooseUs() {
  const containerRef = useScrollReveal();
  const listRef = useStaggerReveal('.stagger-item');

  const reasons = [
    "Modern & Unique Designs",
    "Mobile First Approach",
    "Fast Delivery",
    "Ongoing Support"
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 relative bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="reveal-up text-4xl md:text-5xl font-bold mb-6 text-text">
          Why Businesses <span className="text-gradient">Choose Us</span>
        </h2>
        <p className="reveal-up text-text-muted mb-16 max-w-2xl mx-auto text-lg">
          We focus on quality, creativity and real results. Your success is our ultimate priority.
        </p>
        
        <div ref={listRef} className="grid sm:grid-cols-2 gap-6 text-left">
          {reasons.map((reason, index) => (
            <div key={index} className="stagger-item glass-card p-6 rounded-2xl flex items-center gap-4 hover:-translate-y-1 hover:shadow-elevated transition-all duration-300 bg-white group border border-gray-100">
              <div className="p-3 bg-accent/5 rounded-xl group-hover:bg-accent/10 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              </div>
              <span className="font-semibold text-lg text-text">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
