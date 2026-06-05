import { useScrollReveal, useStaggerReveal, useCountUp } from '../hooks/useScrollAnimations';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const containerRef = useScrollReveal();
  const statsRef = useStaggerReveal('.stagger-item');
  
  const daysRef = useCountUp(3);
  const industriesRef = useCountUp(5);
  const clientsRef = useCountUp(100);

  return (
    <section ref={containerRef} className="py-24 px-6 relative bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal-up flex gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-text-muted border border-gray-200 rounded-full">Web Design</span>
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-text-muted border border-gray-200 rounded-full">Creative Ads</span>
            </div>
            
            <h2 className="reveal-up text-4xl md:text-5xl font-bold mb-6 text-text">
              Built For <span className="text-gradient">Modern</span> Businesses
            </h2>
            
            <p className="reveal-up text-lg text-text-muted mb-8 leading-relaxed">
              DigitalOrbit helps businesses establish a strong online presence through high-performing websites and creative advertising. We merge premium aesthetics with solid performance to deliver experiences that convert.
            </p>
            
            <a href="#services" className="reveal-up text-accent font-semibold hover:text-accent-light transition-colors flex items-center gap-2 group">
              More About Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            <div className="stagger-item glass-card p-8 rounded-3xl border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl font-bold text-accent mb-2">
                <span ref={daysRef}>0</span>
              </div>
              <div className="text-sm font-medium text-text-muted">Days Avg. Delivery</div>
            </div>
            
            <div className="stagger-item glass-card p-8 rounded-3xl border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300 translate-y-4">
              <div className="text-4xl font-bold text-accent mb-2">
                <span ref={industriesRef}>0</span>+
              </div>
              <div className="text-sm font-medium text-text-muted">premium project</div>
            </div>

            <div className="stagger-item glass-card p-8 rounded-3xl border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300 col-span-2">
              <div className="text-5xl font-bold text-gradient mb-2">
                <span ref={clientsRef}>0</span>%
              </div>
              <div className="text-sm font-medium text-text-muted">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
