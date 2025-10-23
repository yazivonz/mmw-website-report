import { Code, Send, Radio, Search, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    icon: Code,
    title: 'Data Encoding',
    description: 'Original data is encoded with error detection bits using mathematical algorithms',
    position: 'left',
    link: '/lessons/data-encoding',
  },
  {
    icon: Send,
    title: 'Transmission',
    description: 'Encoded data travels through the communication channel or storage medium',
    position: 'center',
    link: '/lessons/transmission',
  },
  {
    icon: Radio,
    title: 'Reception',
    description: 'Data packet arrives at the destination and is ready for verification',
    position: 'center',
    link: '/lessons/reception',
  },
  {
    icon: Search,
    title: 'Checking',
    description: 'Error detection algorithm analyzes the received data for any corruption',
    position: 'center',
    link: '/lessons/checking',
  },
  {
    icon: CheckCircle,
    title: 'Detection',
    description: 'System confirms data integrity or flags errors for retransmission',
    position: 'right',
    link: '/lessons/detection',
  },
];

const HowItWorks = () => {
  const navigate = useNavigate();
  
  return (
    <section id="how-it-works" className="py-24 relative bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-4">
            How It <span className="text-primary" style={{ textShadow: 'var(--glow-primary)' }}>Works</span>
          </h2>
          <p className="text-xl text-secondary font-poppins max-w-3xl mx-auto">
            The journey of data from sender to receiver, protected every step of the way
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="glass-dark p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group h-full flex flex-col items-center text-center" onClick={() => navigate(step.link)}>
                    {/* Icon circle */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:animate-pulse-glow">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent border-2 border-background flex items-center justify-center">
                        <span className="text-sm font-orbitron font-bold text-background">{index + 1}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-orbitron font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-secondary font-poppins text-sm leading-relaxed flex-grow">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 glass-dark p-8 rounded-2xl max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-orbitron font-bold text-primary">Real-Time Protection</h3>
            <p className="text-secondary font-poppins leading-relaxed">
              This entire process happens in milliseconds, ensuring that your data remains accurate and reliable whether 
              you're browsing the web, making a video call, or accessing cloud storage. Error detecting codes work silently 
              in the background, making modern digital communication possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
