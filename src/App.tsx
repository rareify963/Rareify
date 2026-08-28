import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Workflow } from './components/Workflow';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-purple-accent/20 selection:text-purple-900">
      <LoadingScreen />
      <Navbar />
      
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Workflow />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

