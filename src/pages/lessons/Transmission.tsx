import { Send, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FloatingBubbles from '@/components/FloatingBubbles';

const Transmission = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <FloatingBubbles />
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 text-primary hover:text-accent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <div className="text-center mb-12">
            <div className="inline-block p-4 rounded-full bg-primary/20 border-2 border-primary mb-4">
              <Send className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl font-orbitron font-bold text-foreground mb-4">
              Data Transmission
            </h1>
            <p className="text-xl text-secondary font-poppins">
              Sending encoded data through communication channels
            </p>
          </div>

          <Card className="glass-dark p-8 space-y-6">
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">What is Data Transmission?</h2>
              <p className="text-secondary font-poppins leading-relaxed">
                Data transmission is the process of sending encoded data from a source to a destination through 
                a communication channel. During this journey, data may encounter various types of interference, 
                noise, and physical limitations that can potentially corrupt the transmitted information.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Types of Transmission</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Serial Transmission</h3>
                  <p className="text-secondary font-poppins">
                    Data bits are sent one after another in sequence over a single channel. Common in USB, 
                    Ethernet, and long-distance communications. More reliable over long distances.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Parallel Transmission</h3>
                  <p className="text-secondary font-poppins">
                    Multiple bits are sent simultaneously over multiple channels. Faster but limited to 
                    short distances. Used in computer buses and internal connections.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Transmission Media</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">Wired Media</h3>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm">
                    <li>Twisted Pair Cables (Ethernet)</li>
                    <li>Coaxial Cables (Cable TV)</li>
                    <li>Fiber Optic Cables (High-speed)</li>
                  </ul>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">Wireless Media</h3>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm">
                    <li>Radio Waves (Wi-Fi, Bluetooth)</li>
                    <li>Microwaves (Satellites)</li>
                    <li>Infrared (Remote controls)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Common Transmission Errors</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Single-Bit Errors</h3>
                  <p className="text-secondary font-poppins">
                    Only one bit in a data unit changes due to brief noise spikes. Most common in serial transmission.
                  </p>
                  <p className="text-primary font-mono text-sm mt-2">
                    Sent: 10110101 → Received: 10111101 (bit 3 flipped)
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Burst Errors</h3>
                  <p className="text-secondary font-poppins">
                    Multiple consecutive bits are corrupted. Caused by impulse noise or signal fading.
                  </p>
                  <p className="text-primary font-mono text-sm mt-2">
                    Sent: 10110101 → Received: 10001101 (bits 2-4 corrupted)
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Noise Sources</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li><span className="font-semibold text-accent">Thermal Noise:</span> Random electron movement in conductors</li>
                <li><span className="font-semibold text-accent">Crosstalk:</span> Interference from adjacent signal lines</li>
                <li><span className="font-semibold text-accent">Impulse Noise:</span> Sudden spikes from external sources (lightning, motors)</li>
                <li><span className="font-semibold text-accent">Attenuation:</span> Signal weakening over distance</li>
                <li><span className="font-semibold text-accent">Distortion:</span> Signal shape changes due to medium characteristics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Transmission Modes</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Simplex</h3>
                  <p className="text-secondary font-poppins">
                    One-way communication only (keyboard to computer, broadcast radio).
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Half-Duplex</h3>
                  <p className="text-secondary font-poppins">
                    Two-way communication, but not simultaneously (walkie-talkies, CB radio).
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Full-Duplex</h3>
                  <p className="text-secondary font-poppins">
                    Simultaneous two-way communication (telephone, modern networks).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Why Error Detection Matters</h2>
              <p className="text-secondary font-poppins mb-4">
                During transmission, even with the best infrastructure, errors can occur. Error detecting 
                codes are essential because:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>No transmission medium is 100% noise-free</li>
                <li>Long distances amplify error probability</li>
                <li>Wireless channels are inherently unreliable</li>
                <li>Critical data (financial, medical) requires guaranteed accuracy</li>
                <li>Retransmission is expensive in terms of time and bandwidth</li>
              </ul>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Transmission;
