import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimations';

export default function PortfolioSection() {
  const containerRef = useScrollReveal();
  const projectsRef = useStaggerReveal('.stagger-item', { stagger: 0.15 });

  const projects = [
    { 
      name: "Restaurant Demo", 
      category: "Web Design & Development", 
      style: "with  table RESERVE option", 
      screenshot: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", 
      liveLink: "https://princesoni010.github.io/demo-restaurant-website/" 
    },
    { 
      name: "Wedding Photographer Portfolio", 
      category: "Web Design & Branding", 
      style: "Visual Storytelling", 
      screenshot: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", 
      liveLink: "https://princesoni010.github.io/weedingphotographer/" 
    },
    { 
      name: "Titan Fitness", 
      category: "Web Design & Social Ads", 
      style: "Modern Fitness", 
      screenshot: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", 
      liveLink: "https://princesoni010.github.io/Titan-Fitness/" 
    },
     { 
      name: "Premium Resort Website", 
      category: "Web Design ", 
      style: "LUXURY & STAY", 
      screenshot: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800", 
      liveLink: "https://princesoni010.github.io/Titan-Fitness/" 
    }




  ];

  return (
    <section ref={containerRef} className="py-24 px-6 relative bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="reveal-up text-4xl md:text-5xl font-bold mb-4 text-text">
              Selected <span className="text-gradient">Work</span>
            </h2>
            <p className="reveal-up text-text-muted text-lg max-w-xl">
              A glimpse of our recent projects that delivered real impact and beautiful digital experiences.
            </p>
          </div>
          <button className="reveal-up hidden md:flex items-center gap-2 font-semibold text-text hover:text-accent transition-colors group">
            View All Projects <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="stagger-item group relative flex flex-col justify-between glass-card p-6 rounded-3xl h-full bg-white hover:-translate-y-2 transition-transform duration-500 shadow-soft hover:shadow-elevated">
              
              {/* Image Area */}
              <div className="w-full rounded-2xl overflow-hidden relative mb-6 aspect-[4/3]">
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 z-10"></div>
                <img 
                  src={project.screenshot} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
              </div>
              
              {/* Text Area */}
              <div className="w-full mt-auto flex flex-col flex-grow">
                <span className="text-accent text-xs font-bold tracking-wider uppercase mb-2 block">{project.style}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-text">{project.name}</h3>
                <p className="text-text-muted font-medium mb-6 flex-grow">{project.category}</p>
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-100 rounded-full text-text font-semibold hover:border-accent hover:text-accent transition-colors"
                >
                  View Live <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
