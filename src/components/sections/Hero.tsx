import { Button } from '@/components/ui/button';
import { Binary, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated binary background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute text-primary font-mono text-xs animate-slide-left" style={{ top: '10%', left: '5%' }}>
          01001000 01100101 01101100 01101100 01101111
        </div>
        <div className="absolute text-accent font-mono text-xs animate-slide-right" style={{ top: '30%', right: '10%' }}>
          01010111 01101111 01110010 01101100 01100100
        </div>
        <div className="absolute text-primary font-mono text-xs animate-slide-left" style={{ top: '60%', left: '15%' }}>
          01000100 01100001 01110100 01100001
        </div>
        <div className="absolute text-accent font-mono text-xs animate-slide-right" style={{ top: '80%', right: '20%' }}>
          01000101 01110010 01110010 01101111 01110010
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 md:space-y-8 animate-fade-up">
            {/* Floating icons */}
            <div className="flex gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="animate-float" style={{ animationDelay: '0s' }}>
                <Binary className="w-8 h-8 md:w-12 md:h-12 text-primary" style={{ filter: 'drop-shadow(0 0 10px hsl(var(--primary)))' }} />
              </div>
              <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                <Shield className="w-8 h-8 md:w-12 md:h-12 text-accent" style={{ filter: 'drop-shadow(0 0 10px hsl(var(--accent)))' }} />
              </div>
              <div className="animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-8 h-8 md:w-12 md:h-12 text-primary" style={{ filter: 'drop-shadow(0 0 10px hsl(var(--primary)))' }} />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black text-foreground mb-6 animate-scale-in">
              Ensuring Data Integrity
              <br />
              <span className="text-primary" style={{ textShadow: 'var(--glow-primary)' }}>
                One Bit at a Time
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-secondary font-poppins mb-8 md:mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Discover how Error Detecting Codes protect communication in a digital world
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-accent text-background font-orbitron font-bold text-lg px-8 py-6 animate-pulse-glow"
                onClick={() => scrollToSection('types')}
              >
                Explore Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-orbitron font-bold text-lg px-8 py-6 transition-all"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - 3D Animation */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="perspective-container w-full h-full flex items-center justify-center">
              {/* Rotating 3D Cube */}
              <div className="cube-3d-hero">
                <div className="cube-face front"></div>
                <div className="cube-face back"></div>
                <div className="cube-face right"></div>
                <div className="cube-face left"></div>
                <div className="cube-face top"></div>
                <div className="cube-face bottom"></div>
              </div>
              
              {/* Orbiting particles */}
              <div className="orbit-ring">
                <div className="orbit-particle" style={{ animationDelay: '0s' }}></div>
                <div className="orbit-particle" style={{ animationDelay: '1s' }}></div>
                <div className="orbit-particle" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
