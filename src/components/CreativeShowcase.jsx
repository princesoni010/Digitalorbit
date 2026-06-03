import { motion } from "framer-motion";

export default function CreativeShowcase() {
  const items = [
    { title: "", image: "/public/noodle.png" },
    { title: "Promotional Poster", image: "/public/brand.png" },
    { title: "Branding Poster", image: "/public/DO.png" },
    { title: "", image: "/public/burger.png" },
  ];

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section className="py-24 px-6 bg-black/50 overflow-hidden" id="showcase">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Creative <span className="text-gradient">Showcase</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          High-impact visuals designed to capture attention and drive conversions.
        </p>
      </div>

      {/* Slider Container */}
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] mb-12">
        <motion.div
          className="flex gap-4 pr-4 min-w-full shrink-0"
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div 
              key={index} 
              className="w-[280px] md:w-[350px] aspect-[3/4] overflow-hidden relative group rounded-xl shrink-0 shadow-lg bg-zinc-900"
            >
              <img
                src={item.image}
                alt={item.title || "Creative Showcase"}
                className="w-full h-full  transition-transform duration-500 group-hover:scale-105"
              />

              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- INSTAGRAM REDIRECT BUTTON --- */}
      <div className="flex justify-center mt-12">
        <a 
          href="https://www.instagram.com/digitalorbit__agency/" // <-- Yahan apna Instagram username daalein
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all duration-300 relative group overflow-hidden border border-white/10"
        >
          {/* Instagram Gradient Background on Hover */}
          <span className="absolute inset-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          
          {/* Default Dark Background */}
          <span className="absolute inset-0 bg-white/5 group-hover:opacity-0 transition-opacity duration-300 z-0" />

          {/* SVG Instagram Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="relative z-10 transition-transform group-hover:scale-110"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>

          <span className="relative z-10">View More on Instagram</span>
        </a>
      </div>
    </section>
  );
}