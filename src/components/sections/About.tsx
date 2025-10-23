import { useState } from 'react';
import { ChevronLeft, ChevronRight, Binary, Shield, Zap, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    title: 'What are Error Detecting Codes?',
    content: 'Error detecting codes are specialized algorithms that add redundant information to data, allowing systems to identify when corruption occurs during transmission or storage. These codes act as digital guardians, ensuring that the information you send arrives exactly as intended.',
    icon: Binary,
    animation: 'binary-flow',
  },
  {
    title: 'Why Do We Need Them?',
    content: 'In digital communication, data travels through imperfect channels—wireless signals fade, storage devices degrade, and electromagnetic interference corrupts bits. Without error detection, a single flipped bit could crash systems, corrupt files, or compromise security. These codes provide the safety net that makes reliable digital communication possible.',
    icon: Shield,
    animation: 'shield-pulse',
  },
  {
    title: 'How Do They Work?',
    content: 'The sender encodes data by calculating check bits using mathematical formulas (like XOR operations or polynomial division). The receiver performs the same calculation on received data. If the check bits match, the data is intact. If they differ, an error is detected and the data can be retransmitted.',
    icon: Zap,
    animation: 'data-transfer',
  },
  {
    title: 'Real-World Impact',
    content: 'Every digital interaction relies on error detection—from streaming videos without glitches, to ensuring your bank transfer goes to the right account, to NASA communicating with Mars rovers millions of miles away. These invisible codes are the foundation of our connected world.',
    icon: Network,
    animation: 'network-mesh',
  },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentSlide];
  const Icon = current.icon;

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-foreground mb-4">
            About <span className="text-primary" style={{ textShadow: 'var(--glow-primary)' }}>Error Detecting Codes</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary font-poppins max-w-3xl mx-auto">
            Understanding the foundation of reliable digital communication
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="glass-dark rounded-2xl p-6 md:p-12 border-2 border-primary/30">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[400px]">
              {/* Left: Content */}
              <div className="space-y-6 animate-fade-up order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-orbitron font-bold text-foreground">
                  {current.title}
                </h3>
                
                <p className="text-base md:text-lg text-secondary font-poppins leading-relaxed">
                  {current.content}
                </p>

                {/* Slide indicator */}
                <div className="flex items-center gap-3 pt-4">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide ? 'bg-primary w-12' : 'bg-primary/30 w-2'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: 3D Animation */}
              <div className="relative h-[300px] md:h-[400px] flex items-center justify-center order-1 md:order-2">
                <div className={`about-animation-${current.animation}`}>
                  {current.animation === 'binary-flow' && (
                    <div className="binary-flow-container">
                      <div className="binary-stream" style={{ animationDelay: '0s' }}>101010</div>
                      <div className="binary-stream" style={{ animationDelay: '0.5s' }}>110011</div>
                      <div className="binary-stream" style={{ animationDelay: '1s' }}>001101</div>
                      <div className="binary-stream" style={{ animationDelay: '1.5s' }}>111000</div>
                    </div>
                  )}
                  
                  {current.animation === 'shield-pulse' && (
                    <div className="shield-container">
                      <div className="shield-outer"></div>
                      <div className="shield-middle"></div>
                      <div className="shield-inner">
                        <Icon className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                      </div>
                    </div>
                  )}
                  
                  {current.animation === 'data-transfer' && (
                    <div className="data-transfer-container">
                      <div className="data-node left">
                        <div className="node-pulse"></div>
                      </div>
                      <div className="data-packet"></div>
                      <div className="transfer-line"></div>
                      <div className="data-node right">
                        <div className="node-pulse"></div>
                      </div>
                    </div>
                  )}
                  
                  {current.animation === 'network-mesh' && (
                    <div className="network-mesh-container">
                      <div className="mesh-node" style={{ top: '10%', left: '20%' }}></div>
                      <div className="mesh-node" style={{ top: '10%', right: '20%' }}></div>
                      <div className="mesh-node" style={{ bottom: '10%', left: '20%' }}></div>
                      <div className="mesh-node" style={{ bottom: '10%', right: '20%' }}></div>
                      <div className="mesh-node" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                      </div>
                      <svg className="mesh-connections" width="100%" height="100%">
                        <line x1="20%" y1="10%" x2="50%" y2="50%" className="mesh-line" />
                        <line x1="80%" y1="10%" x2="50%" y2="50%" className="mesh-line" />
                        <line x1="20%" y1="90%" x2="50%" y2="50%" className="mesh-line" />
                        <line x1="80%" y1="90%" x2="50%" y2="50%" className="mesh-line" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-6 md:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background w-10 h-10 md:w-12 md:h-12 rounded-full"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            <div className="flex items-center px-4 md:px-6 glass rounded-full">
              <span className="text-foreground font-orbitron font-bold text-sm md:text-base">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background w-10 h-10 md:w-12 md:h-12 rounded-full"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
