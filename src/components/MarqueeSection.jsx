import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useScrollReveal } from '../hooks/useScrollAnimations';

export default function MarqueeSection() {
  const containerRef = useScrollReveal();
  const marqueeRef = useRef(null);

  const items = [
    "Web Design",
    "Creative Ads",
    "Social Media Creatives",
    "Responsive Development",
    "Brand Identity",
    "Digital Growth"
  ];

  const marqueeItems = [...items, ...items, ...items, ...items]; // Multiply for long screens

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Use GSAP for smooth marquee
    const tween = gsap.to(marquee, {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });

    // Pause on hover
    marquee.addEventListener("mouseenter", () => tween.pause());
    marquee.addEventListener("mouseleave", () => tween.play());

    return () => {
      marquee.removeEventListener("mouseenter", () => tween.pause());
      marquee.removeEventListener("mouseleave", () => tween.play());
      tween.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white py-6 border-y border-gray-100 overflow-hidden relative flex group">
      {/* GSAP Marquee Track */}
      <div ref={marqueeRef} className="reveal-up flex whitespace-nowrap min-w-max">
        {marqueeItems.map((item, index) => (
          <div key={`track-${index}`} className="flex items-center px-6">
            <span className="font-heading font-bold text-lg md:text-xl tracking-wider uppercase text-text/80 hover:text-accent transition-colors duration-300">
              {item}
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-primary mx-8"></div>
          </div>
        ))}
      </div>
    </div>
  );
}