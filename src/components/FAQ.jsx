import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { cn } from '../utils/cn';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimations';

export default function FAQ() {
  const containerRef = useScrollReveal();
  const faqsRef = useStaggerReveal('.faq-item');

  const faqs = [
    { q: "How much does a website cost?", a: "Our pricing is tailored to each project's specific needs, scope, and goals. As a premium agency, we focus on delivering high-ROI solutions rather than cheap templates. Let's discuss your project to get an accurate estimate." },
    { q: "How long does a project take?", a: "A typical website project takes between 4 to 8 weeks, depending on complexity, features, and how quickly we receive feedback and assets from your team." },
    { q: "Do you provide support after launch?", a: "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and continues to perform optimally." },
    { q: "Can you create advertising creatives too?", a: "Absolutely. Our creative team designs high-converting ad creatives for social media campaigns that align with your overall brand aesthetic." }
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  // GSAP Accordion Animation
  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (!el) return;
      if (index === openIndex) {
        gsap.to(el, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
          marginTop: 16
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power3.in',
          marginTop: 0
        });
      }
    });
  }, [openIndex]);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-4xl mx-auto bg-background">
      <div className="text-center mb-16">
        <h2 className="reveal-up text-4xl md:text-5xl font-bold mb-4 text-text">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="reveal-up text-text-muted text-lg">Everything you need to know about working with us.</p>
      </div>

      <div ref={faqsRef} className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="faq-item glass-card rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all hover:border-accent/30 hover:shadow-soft">
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center bg-transparent focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-lg text-text pr-4">{faq.q}</span>
                <div className={cn("p-2 rounded-full transition-colors duration-300", isOpen ? "bg-accent/10 text-accent" : "bg-gray-50 text-gray-400")}>
                  <ChevronDown className={cn("w-5 h-5 transition-transform duration-500", isOpen && "rotate-180")} />
                </div>
              </button>
              
              <div 
                ref={el => contentRefs.current[index] = el}
                className="overflow-hidden px-8"
                style={{ height: index === 0 ? 'auto' : 0, opacity: index === 0 ? 1 : 0 }}
              >
                <p className="text-text-muted leading-relaxed pb-6 border-t border-gray-50 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
