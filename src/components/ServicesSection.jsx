import { Monitor, Layers, Smartphone, Code } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Website Design",
      icon: <Monitor className="w-8 h-8 text-primary-200" />,
      features: ["Business Websites", "Landing Pages", "Portfolio Websites", "Custom UI Design"],
      
    },
    {
      title: "Creative Ads",
      icon: <Layers className="w-8 h-8 text-primary-300" />,
      features: ["Instagram Ads", "Facebook Ads", "Promotional Posters", "Brand Creatives"],
     
    },
    {
      title: "Social Media Creatives",
      icon: <Smartphone className="w-8 h-8 text-primary-400" />,
      features: ["Reel Covers", "Story Templates", "Post Designs", "Campaign Visuals"],
      
    },
    {
      title: "Responsive Development",
      icon: <Code className="w-8 h-8 text-accent" />,
      features: ["Mobile First", "Fast Performance", "SEO Friendly", "Cross Device Support"],
      
    }
  ];

  return (
    <section className="py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What <span className="text-gradient">We Do</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">We provide high-quality digital solutions to help your brand grow.</p>
        </div>
        
        {/* <div className="grid md:grid-cols-3 gap-6"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service, index) => (
            <div key={index} className={`glass-card p-8 rounded-3xl group hover:bg-white/10 transition-colors h-full  flex-col`}>
              <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>
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
