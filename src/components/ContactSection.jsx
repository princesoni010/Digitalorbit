import { useScrollReveal } from '../hooks/useScrollAnimations';

export default function ContactSection() {
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} className="py-24 px-6 relative overflow-hidden bg-background" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h2 className="reveal-up text-4xl md:text-6xl font-bold mb-6 text-text">
            Let's Build Something <br /><span className="text-gradient">Amazing</span>
          </h2>
          <p className="reveal-up text-lg text-text-muted mb-12 max-w-md">
            Ready to elevate your digital presence? Fill out the form below or reach out directly via WhatsApp for a quicker response.
          </p>
          
          <div className="reveal-up flex flex-wrap gap-4">
            <a 
              href="https://wa.me/916266648026?text=Hi%20DigitalOrbit!%20I'm%20interested%20in%20your%20services." 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#20bd5a] transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a 
              href="mailto:weborbitstudio@gmail.com"
              className="px-8 py-4 bg-white rounded-full font-bold text-text border border-gray-200 hover:border-accent hover:text-accent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 inline-flex items-center"
            >
              Email Us
            </a>
          </div>
        </div>

        <div className="reveal-left glass-card p-8 md:p-12 rounded-3xl bg-white shadow-elevated border border-gray-100">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all" 
                  placeholder="John Doe" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Your Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all" 
                  placeholder="john@company.com" 
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">Business Type</label>
              <div className="relative">
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-text appearance-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all cursor-pointer">
                  <option value="" disabled selected>Select Industry</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="agency">Agency / Services</option>
                  <option value="restaurant">Restaurant / Hospitality</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">Project Details</label>
              <textarea 
                rows={4} 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none" 
                placeholder="Tell us about your goals..."
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-accent hover:bg-accent-light text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-1 flex justify-center items-center gap-2 group"
            >
              Send Message 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </form>
        </div>
      </div>
      
      {/* Subtle Background Element for Light Theme */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary-100/10 to-primary-300/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
    </section>
  );
}
