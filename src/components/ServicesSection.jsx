import { useStaggerReveal, useScrollReveal } from '../hooks/useScrollAnimations';
import { Monitor, Layers, Smartphone, Code } from 'lucide-react';

export default function ServicesSection() {
  const containerRef = useScrollReveal();
  const cardsRef = useStaggerReveal('.stagger-item', { stagger: 0.1 });

  const services = [
    {
      title: "Website Design",
      icon: <Monitor className="w-8 h-8 text-primary-100" />,
      features: ["Business Websites", "Landing Pages", "Portfolio Websites", "Custom UI Design"],
      bgClass: "bg-primary-100/10"
    },
    {
      title: "Creative Ads",
      icon: <Layers className="w-8 h-8 text-primary-200" />,
      features: ["Instagram Ads", "Facebook Ads", "Promotional Posters", "Brand Creatives"],
      bgClass: "bg-primary-200/10"
    },
    {
      title: "Social Media",
      icon: <Smartphone className="w-8 h-8 text-primary-300" />,
      features: ["Reel Covers", "Story Templates", "Post Designs", "Campaign Visuals"],
      bgClass: "bg-primary-300/10"
    },
    {
      title: "Development",
      icon: <Code className="w-8 h-8 text-primary-400" />,
      features: ["Mobile First", "Fast Performance", "SEO Friendly", "Cross Device Support"],
      bgClass: "bg-primary-400/10"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 bg-background" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="reveal-up text-4xl md:text-5xl font-bold mb-4 text-text">
            What <span className="text-gradient">We Do</span>
          </h2>
          <p className="reveal-up text-text-muted max-w-2xl mx-auto text-lg">
            We provide high-quality digital solutions to help your brand grow and stand out in the competitive market.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service, index) => (
            <div key={index} className="stagger-item glass-card p-8 rounded-3xl group transition-all duration-300 hover:-translate-y-2 flex flex-col bg-white">
              <div className={`mb-6 p-4 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300 ${service.bgClass}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text">{service.title}</h3>
              <ul className="space-y-3 mt-auto">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-muted font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
