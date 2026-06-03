export default function CreativeShowcase() {
  const items = [
    { title: "Social Media Ads", image: "/images/poster_social_1780311788697.png", height: "h-80" },
    { title: "Promotional Posters", image: "/images/poster_promo_1780311806196.png", height: "h-64" },
    { title: "Brand Campaigns", image: "/images/poster_campaign_1780311823081.png", height: "h-96" },
    { title: "Marketing Visuals", image: "/images/poster_marketing_1780311837453.png", height: "h-72" },
  ];

  return (
    <section className="py-24 px-6 bg-black/50" id="showcase">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Creative <span className="text-gradient">Showcase</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">High-impact visuals designed to capture attention and drive conversions.</p>
        </div>

        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {items.map((item, index) => (
            <div key={index} className={`relative rounded-3xl overflow-hidden group cursor-pointer ${item.height} break-inside-avoid`}>
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-sm text-accent mt-2">View Creative</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
