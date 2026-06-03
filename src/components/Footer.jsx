export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8 px-6 mt-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        <div className="col-span-2 lg:col-span-2">
          <div className="text-2xl font-heading font-bold text-gradient mb-4">
            DigitalOrbit
          </div>
          <p className="text-white/60 max-w-sm">
            We build digital experiences that help businesses grow and stand out in the digital world.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-white">Company</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white">Services</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#" className="hover:text-accent transition-colors">Website Design</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Creative Ads</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Social Media Creatives</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Responsive Development</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white">Connect</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Twitter/X</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <p>© 2026 DigitalOrbit. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
