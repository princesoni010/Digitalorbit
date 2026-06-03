// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// export default function MarqueeSection() {
//   const items = [
//     "Web Design",
//     "Creative Ads",
//     "Social Media Creatives",
//     "Responsive Development",
//     "Brand Identity",
//     "Digital Growth"
//   ];

//   // We duplicate the items to ensure seamless scrolling
//   const marqueeItems = [...items, ...items];

//   return (
//     <div className="w-full bg-[#0d0d1a] py-3 border-y border-[#6C63FF]/20 overflow-hidden relative flex group">
//       <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
//         {marqueeItems.map((item, index) => (
//           <div key={index} className="flex items-center px-4">
//             <span className="font-heading font-semibold text-[15px] tracking-[0.08em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#EC4899] to-[#06B6D4]">
//               {item}
//             </span>
//             <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#EC4899] mx-6"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MarqueeSection() {
  const items = [
    "Web Design",
    "Creative Ads",
    "Social Media Creatives",
    "Responsive Development",
    "Brand Identity",
    "Digital Growth"
  ];

  // Seamless looping ke liye items ko duplicate kiya hai
  const marqueeItems = [...items, ...items];

  return (
    <>
      {/* 1. Animation keyframes inject karne ke liye custom <style> block */}
      <style>{`
        @keyframes customMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-custom-marquee {
          animation: customMarquee 25s linear infinite;
        }
      `}</style>

      {/* 2. Main Marquee Wrapper */}
      <div className="w-full bg-[#0d0d1a] py-3 border-y border-[#6C63FF]/20 overflow-hidden relative flex group">
        
        {/* Pehla Track (First Container) */}
        <div className="flex whitespace-nowrap animate-custom-marquee group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => (
            <div key={`track1-${index}`} className="flex items-center px-4">
              <span className="font-heading font-semibold text-[15px] tracking-[0.08em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#EC4899] to-[#06B6D4]">
                {item}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#EC4899] mx-6"></div>
            </div>
          ))}
        </div>

        {/* Doosra Track (Second Container) - Jo pehle wale ke turant peeche jud ke chalega */}
        <div className="flex whitespace-nowrap animate-custom-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          {marqueeItems.map((item, index) => (
            <div key={`track2-${index}`} className="flex items-center px-4">
              <span className="font-heading font-semibold text-[15px] tracking-[0.08em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#EC4899] to-[#06B6D4]">
                {item}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#EC4899] mx-6"></div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}