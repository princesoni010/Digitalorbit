import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    "Modern & Unique Designs",
    "Mobile First Approach",
    "Fast Delivery",
    "Ongoing Support"
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Businesses <span className="text-gradient">Choose Us</span>
        </h2>
        <p className="text-white/70 mb-12 max-w-2xl mx-auto">
          We focus on quality, creativity and results. Your success is our priority.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {reasons.map((reason, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="font-medium text-lg">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
