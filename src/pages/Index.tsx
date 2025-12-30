import Hero from "@/components/Hero";
import PhoneCarousel from "@/components/PhoneCarousel";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Spotlight, GridBackground } from "@/components/ui/spotlight-new";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, Cog, MessageSquare, DollarSign, HelpCircle, Mail } from "lucide-react";
const Index = () => {
  const navItems = [{
    name: 'בית',
    url: '#hero',
    icon: Home
  }, {
    name: 'אודות',
    url: '#about',
    icon: User
  }, {
    name: 'עבודות',
    url: '#portfolio',
    icon: Briefcase
  }, {
    name: 'המלצות',
    url: '#testimonials',
    icon: MessageSquare
  }, {
    name: 'מחירים',
    url: '#pricing',
    icon: DollarSign
  }];
  return <main className="min-h-screen relative">
      {/* Navigation */}
      <NavBar items={navItems} />
      
      {/* Animated spotlight background */}
      <div className="fixed inset-0 z-0">
        <GridBackground />
        <Spotlight />
      </div>
      
      {/* Content layer */}
      <div className="relative z-10">
        <section id="phone-carousel">
          <PhoneCarousel />
        </section>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          
        </section>
        <section id="portfolio">
          
        </section>
        <section id="process">
          
        </section>
        <section id="testimonials">
          
        </section>
        <section id="pricing">
          
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          
        </section>
        <Footer />
      </div>
    </main>;
};
export default Index;