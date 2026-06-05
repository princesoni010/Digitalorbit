import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CreativeShowcase() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  // const baseItems = [
  //   { title: "Food Photography", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" },
  //   // { title: "Product Promo", image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" },
  //   // { title: "Brand Identity", image: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" },
  //   // { title: "Apparel Ads", image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" },
  //   // { title: "Digital Marketing", image: "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" },
  //   { title: "pramotional posters ", image: "/public/noodle.png" },
  //   { title: "Promotional Poster", image: "/public/brand.png" },
  //   { title: "Branding Poster", image: "/public/DO.png" },
  //   { title: "Burger Studio", image: "/public/burger.png" },
  // ];

  const baseItems = [
  { 
    title: "Food Photography", 
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" 
  },
  { title: "promotional posters ", image: "/noodle.png" }, 
  { title: "Promotional Poster",   image: "/brand.png" },  
  { title: "Branding Poster",      image: "/DO.png" },     
  { title: "Burger Studio",        image: "/burger.png" }, 
];

  // Infinite Seamless Loop ke liye array ko duplicate kar rahe hain
  const items = [...baseItems, ...baseItems];

  useEffect(() => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    const container = containerRef.current;

    if (!slider || !track) return;

    let ctx = gsap.context(() => {
      // Fade in animations for text
      gsap.fromTo(".reveal-element", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // --- SPEED CONFIGURATION ---
      // Is number ko CHNAGE karein speed badhane/ghatane ke liye.
      // Jitna KAM number hoga (e.g., 15) utna FAST chalega.
      // Jitna ZYADA number hoga (e.g., 40) utna SLOW chalega.
      const SPEED_IN_SECONDS = 25; 

      // Poore track ki aadhi width (kyunki humne items duplicate kiye hain)
      const loopWidth = track.scrollWidth / 2;

      // LINEAR SEAMLESS CONTINUOUS LOOP (No Reverse)
      const autoTween = gsap.to(track, {
        x: -loopWidth,
        ease: "none",
        duration: SPEED_IN_SECONDS,
        repeat: -1, // Infinite loop
        modifiers: {
          // Yeh function track ko end par pahunche hi bina jhatke ke fir se 0 par le aayega
          x: gsap.utils.unitize(x => parseFloat(x) % loopWidth)
        }
      });

      // Hover behavior
      const handleMouseEnter = () => autoTween.pause();
      const handleMouseLeave = () => autoTween.play();

      track.addEventListener("mouseenter", handleMouseEnter);
      track.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        track.removeEventListener("mouseenter", handleMouseEnter);
        track.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-background overflow-hidden relative" id="showcase">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="reveal-element text-4xl md:text-5xl font-bold mb-4 text-text opacity-0">
          Creative <span className="text-gradient">Showcase</span>
        </h2>
        <p className="reveal-element text-text-muted max-w-2xl mx-auto text-lg opacity-0">
          High-impact visuals and ad creatives designed to capture attention, stop the scroll, and drive conversions.
        </p>
      </div>

      {/* Main Track Slider */}
      <div ref={sliderRef} className="w-full overflow-hidden cursor-pointer">
        <div ref={trackRef} className="flex gap-6 w-max">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="w-[280px] md:w-[360px] aspect-[4/5] overflow-hidden relative group rounded-2xl shrink-0 shadow-elevated bg-white"
            >
              <img
                src={item.image}
                alt={item.title || "Showcase Item"}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text/90 via-text/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{item.title || "Creative Design"}</h3>
                <div className="w-10 h-1 bg-accent rounded-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INSTAGRAM BUTTON */}
      <div className="flex justify-center mt-24">
        <a 
          href="https://www.instagram.com/digitalorbit__agency/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="reveal-element inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 relative group overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 opacity-0"
        >
          <span className="absolute inset-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] z-0" />
          <span className="absolute top-0 -left-[100%] w-1/2 h-full bg-white/20 skew-x-[45deg] group-hover:animate-[shine_1s_ease-out] z-0" />

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
          <span className="relative z-10">Follow Our Instagram</span>
        </a>
      </div>
      
      <style>{`
        @keyframes shine {
          100% { left: 200%; }
        }
      `}</style>
    </section>
  );
}
