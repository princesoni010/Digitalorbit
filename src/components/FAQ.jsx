import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

export default function FAQ() {
  const faqs = [
    { q: "How much does a website cost?", a: "Our pricing is tailored to each project's specific needs, scope, and goals. As a premium agency, we focus on delivering high-ROI solutions rather than cheap templates. Let's discuss your project to get an accurate estimate." },
    { q: "How long does a project take?", a: "A typical website project takes between 4 to 8 weeks, depending on complexity, features, and how quickly we receive feedback and assets from your team." },
    { q: "Do you provide support after launch?", a: "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and continues to perform optimally." },
    { q: "Can you create advertising creatives too?", a: "Absolutely. Our creative team designs high-converting ad creatives for social media campaigns that align with your overall brand aesthetic." }
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = open === index;
          return (
            <div key={index} className="glass-card rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <ChevronDown className={cn("w-5 h-5 text-accent transition-transform duration-300", isOpen && "rotate-180")} />
              </button>
              <div 
                className={cn(
                  "grid transition-all duration-300 ease-in-out px-8",
                  isOpen ? "grid-rows-[1fr] opacity-100 py-6 border-t border-white/5" : "grid-rows-[0fr] opacity-0 py-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-white/70">{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
