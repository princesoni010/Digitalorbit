import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import CreativeShowcase from './components/CreativeShowcase';
import ProcessSection from './components/ProcessSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <CreativeShowcase />
        <ProcessSection />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
