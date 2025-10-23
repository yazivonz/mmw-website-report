import { useState } from 'react';
import { ChevronLeft, ChevronRight, Wifi, HardDrive, Satellite, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

const applications = [
  {
    icon: Wifi,
    title: 'Networking',
    description: 'Ethernet, Wi-Fi, and all network protocols use error detection to ensure reliable data transmission across networks.',
    examples: ['TCP/IP protocols', 'Wireless communications', 'Internet data packets', 'LAN/WAN connections'],
    color: 'primary',
  },
  {
    icon: HardDrive,
    title: 'Data Storage',
    description: 'SSDs, RAM, and hard drives employ error detection to maintain data integrity during read and write operations.',
    examples: ['Solid State Drives', 'RAM modules', 'Hard disk drives', 'Flash memory'],
    color: 'accent',
  },
  {
    icon: Satellite,
    title: 'Communication Systems',
    description: 'Satellites and long-distance communications rely heavily on error detection due to signal degradation over distance.',
    examples: ['Satellite transmission', 'Deep space communication', 'Radio broadcasting', 'Cellular networks'],
    color: 'primary',
  },
  {
    icon: QrCode,
    title: 'Everyday Use',
    description: 'QR codes, bank systems, and digital transactions all implement error detection for accuracy and security.',
    examples: ['QR code scanning', 'Banking systems', 'Credit card transactions', 'Barcode readers'],
    color: 'accent',
  },
];

const Applications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % applications.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + applications.length) % applications.length);
  };

  const current = applications[currentIndex];
  const Icon = current.icon;

  return (
    <section id="applications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-4">
            Real-World <span className="text-primary" style={{ textShadow: 'var(--glow-primary)' }}>Applications</span>
          </h2>
          <p className="text-xl text-secondary font-poppins max-w-3xl mx-auto">
            Error detecting codes power the technology you use every single day
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-dark rounded-2xl p-6 md:p-8 lg:p-12 border-2 border-primary/30 animate-scale-in">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center ${
                  current.color === 'primary' ? 'bg-primary/20 border-2 border-primary' : 'bg-accent/20 border-2 border-accent'
                } animate-pulse-glow`}
              >
                <Icon className={`w-12 h-12 ${current.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground">{current.title}</h3>
                <p className="text-base md:text-lg text-secondary font-poppins leading-relaxed max-w-2xl">{current.description}</p>

                {/* Examples */}
                <div className="grid md:grid-cols-2 gap-4 pt-6">
                  {current.examples.map((example, index) => (
                    <div
                      key={example}
                      className="glass p-4 rounded-lg animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <p className="text-foreground font-poppins font-medium">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background w-12 h-12 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {applications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background w-12 h-12 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
