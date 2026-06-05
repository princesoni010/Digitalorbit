export default function Footer() {
  return (
    <footer className="pt-16 pb-8 px-6 mt-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        <div className="col-span-2 lg:col-span-2">
          <div className="text-2xl font-heading font-bold text-gradient mb-4">
            DigitalOrbit
          </div>
          <p className="text-text-muted max-w-sm leading-relaxed">
            We build premium digital experiences that help businesses grow, convert visitors, and stand out in the competitive digital landscape.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-text uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-4 text-text-muted font-medium">
            <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-text uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-4 text-text-muted font-medium">
            <li><a href="#services" className="hover:text-accent transition-colors">Website Design</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Creative Ads</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Social Media Creatives</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Responsive Development</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-text uppercase tracking-wider text-sm">Connect</h4>
          <ul className="space-y-4 text-text-muted font-medium">
            <li>
              <a href="https://www.instagram.com/digitalorbit__agency/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors inline-flex items-center gap-2">
                Instagram
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            </li>
            <li>
              <a href="https://wa.me/916266648026" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors inline-flex items-center gap-2">
                WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            </li>
            <li>
              <a href="mailto:weborbitstudio@gmail.com" className="hover:text-accent transition-colors inline-flex items-center gap-2">
                Email Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted font-medium">
        <p>© {new Date().getFullYear()} DigitalOrbit. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-text transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-text transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
