export default function ProcessSection() {
  const steps = [
    { num: "01", title: "Discover", desc: "Understanding your brand, goals, and target audience." },
    { num: "02", title: "Design", desc: "Crafting premium aesthetics and user experiences." },
    { num: "03", title: "Develop", desc: "Building fast, responsive, and scalable solutions." },
    { num: "04", title: "Launch", desc: "Deploying your new digital presence to the world." }
  ];

  return (
    <section className="py-24 px-6 bg-black/30" id="process">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our <span className="text-gradient">Process</span></h2>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="w-24 h-24 mb-6 rounded-full glass-card flex items-center justify-center text-3xl font-heading font-bold text-white/30 group-hover:text-accent group-hover:border-accent/50 transition-all duration-300 relative z-10 bg-background mx-auto md:mx-0">
                {step.num}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
