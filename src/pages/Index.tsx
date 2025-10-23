import Navbar from '@/components/Navbar';
import FloatingBubbles from '@/components/FloatingBubbles';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Types from '@/components/sections/Types';
import HowItWorks from '@/components/sections/HowItWorks';
import Applications from '@/components/sections/Applications';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingBubbles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Types />
        <HowItWorks />
        <Applications />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
