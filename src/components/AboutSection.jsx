export default function AboutSection() {
  const stats = [
  { value: "7", label: "Days Avg. Delivery" },
  { value: "3", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" }
];

  return (
    <section className="py-24 px-6 relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex gap-3 mb-6">
              <span className="px-3 py-1 text-xs border border-white/20 rounded-full glass-card">Web Design</span>
              <span className="px-3 py-1 text-xs border border-white/20 rounded-full glass-card">Creative Ads</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built For <span className="text-gradient">Modern</span> Businesses
            </h2>
            <p className="text-lg text-white/70 mb-8">
              DigitalOrbit helps businesses establish a strong online presence through high-performing websites and creative advertising. We merge aesthetics with performance to deliver premium experiences.
            </p>
            <button className="text-accent font-semibold hover:text-white transition-colors flex items-center gap-2 group">
              More About Us <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl border-white/5 hover:border-white/20 transition-all text-center group">
                <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
