import { useStaggerReveal, useScrollReveal } from '../hooks/useScrollAnimations';

export default function ProcessSection() {
  const containerRef = useScrollReveal();
  const stepsRef = useStaggerReveal('.stagger-item', { stagger: 0.2 });

  const steps = [
    { num: "01", title: "Discover", desc: "Understanding your brand, goals, and target audience to lay a solid foundation." },
    { num: "02", title: "Design", desc: "Crafting premium aesthetics and user experiences tailored to your audience." },
    { num: "03", title: "Develop", desc: "Building fast, responsive, and scalable solutions using modern tech." },
    { num: "04", title: "Launch", desc: "Deploying your new digital presence to the world and driving growth." }
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white" id="process">
      <div className="max-w-7xl mx-auto">
        <h2 className="reveal-up text-4xl md:text-5xl font-bold mb-20 text-center text-text">
          Our <span className="text-gradient">Process</span>
        </h2>
        
        <div ref={stepsRef} className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-gray-100 via-accent/30 to-gray-100 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="stagger-item relative group z-10">
              <div className="w-24 h-24 mb-6 rounded-full bg-surface shadow-soft flex items-center justify-center text-3xl font-heading font-bold text-gray-300 group-hover:text-accent border-2 border-transparent group-hover:border-accent/20 transition-all duration-300 mx-auto md:mx-0 group-hover:-translate-y-2 group-hover:shadow-elevated relative overflow-hidden">
                <span className="relative z-10">{step.num}</span>
                <div className="absolute inset-0 bg-accent/5 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 origin-center"></div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-3 text-text group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
