export default function ContactSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something <br /><span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-md">
            Ready to elevate your digital presence? Fill out the form or reach out via WhatsApp.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20 inline-flex items-center gap-2"
            >
              WhatsApp Us
            </a>
            <a 
              href="mailto:hello@digitalorbit.in"
              className="px-8 py-4 glass-card rounded-full font-bold hover:bg-white/10 transition-colors border border-white/20 inline-flex items-center"
            >
              Email Us
            </a>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl relative z-10">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-white/60">Your Name</label>
                <input type="text" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60">Your Email</label>
                <input type="email" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="john@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white/60">Business Type</label>
              <select className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white">
                <option>Select Industry</option>
                <option>E-commerce</option>
                <option>Agency / Services</option>
                <option>Restaurant / Hospitality</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white/60">Project Details</label>
              <textarea rows={4} className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Tell us about your goals..."></textarea>
            </div>
            <button className="w-full py-4 bg-gradient-primary rounded-xl font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow">
              Send Message →
            </button>
          </form>
        </div>
      </div>
      
      {/* Background Element */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
