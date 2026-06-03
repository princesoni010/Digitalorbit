import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    { name: "Restaurant Website", category: "Web Design", style: "Luxury Restaurant", screenshot: "/images/mockup_restaurant_1780311734492.png", liveLink: "#" },
    { name: "Wedding Photographer", category: "Web Design", style: "Premium Storytelling", screenshot: "/images/mockup_wedding_1780311751065.png", liveLink: "#" },
    { name: "Gym Website", category: "Web Design", style: "Modern Fitness", screenshot: "/images/mockup_gym_1780311764786.png", liveLink: "#" }
  ];

  return (
    <section className="py-24 px-6 relative" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected <span className="text-gradient">Work</span></h2>
            <p className="text-white/60">A glimpse of our recent projects that delivered real impact.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 hover:text-accent transition-colors">
            View All <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* <div className="space-y-24"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
           <div key={index} className="group relative flex flex-col justify-between glass-card p-6 rounded-3xl h-full">
              {/* Image Side */}
              {/* <div className={`w-full md:w-2/3 rounded-3xl overflow-hidden relative glass-card p-4 md:p-8 ${index % 2 !== 0 ? 'md:order-2' : ''}`}> */}
              <div className="w-full rounded-2xl overflow-hidden relative p-2 mb-6">
                <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                <img src={project.screenshot} alt={project.name} className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
              
              {/* Text Side */}
              {/* <div className={`w-full md:w-1/3 ${index % 2 !== 0 ? 'md:order-1 md:text-right' : ''}`}> */}
              <div className="w-full mt-auto">
                <span className="text-accent text-sm font-medium tracking-wider uppercase mb-3 block">{project.style}</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.name}</h3>
                <p className="text-white/60 mb-8">{project.category}</p>
                <a href={project.liveLink} className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors">
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
