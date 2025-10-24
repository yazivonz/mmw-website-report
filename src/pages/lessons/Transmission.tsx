import { Send, ArrowLeft, Waves, Cpu, Radio, SignalHigh } from 'lucide-react';
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
          {/* Header Section */}
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

          <Card className="glass-dark p-8 space-y-8">
            {/* What is Data Transmission */}
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">
                What is Data Transmission?
              </h2>
              <p className="text-secondary font-poppins leading-relaxed">
               Once the data is encoded, it is transmitted through a communication channel — such as a wired connection, wireless network, or storage medium.
              </p>
            </section>

            {/* Process Flow */}
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">
              During this process, data can be affected by:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
             <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
  <li>
    <span className="font-semibold text-accent">Electrical Noise: </span> 
    Random signal fluctuations caused by power or electronic interference.
  </li>
  <li>
    <span className="font-semibold text-accent">Signal Interference: </span> 
    Overlapping signals that distort or disrupt data transmission.
  </li>
  <li>
    <span className="font-semibold text-accent">Hardware Faults: </span> 
    Damaged cables or devices causing data loss or corruption.
  </li>
  <li>
    <span className="font-semibold text-accent">Environmental Conditions: </span> 
    Heat, humidity, or radiation weakening the transmitted signal.
  </li>
</ul>


              </ul>
            </section>

            {/* Types of Transmission */}
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">
                Types of Transmission
              </h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg flex items-start gap-3">
                  <Cpu className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-accent mb-1">
                      Serial Transmission
                    </h3>
                    <p className="text-secondary font-poppins">
                      Data bits are sent one after another through a single channel. Common in USB, Ethernet, and long-distance communication systems. 
                      <span className="block text-sm text-primary mt-2">Example: Data transfer between your computer and a USB flash drive.</span>
                    </p>
                  </div>
                </div>
                <div className="glass p-4 rounded-lg flex items-start gap-3">
                  <Waves className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-accent mb-1">
                      Parallel Transmission
                    </h3>
                    <p className="text-secondary font-poppins">
                      Multiple bits are sent simultaneously over multiple channels. It’s faster but suitable for short distances only. 
                      <span className="block text-sm text-primary mt-2">Example: Communication between a CPU and RAM in a computer system.</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Transmission Media
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Transmission Media</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">Wired Media</h3>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm">
                    <li>Twisted Pair Cables — Used in Ethernet LANs</li>
                    <li>Coaxial Cables — Used in cable TV networks</li>
                    <li>Fiber Optic Cables — Used for high-speed internet</li>
                  </ul>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">Wireless Media</h3>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm">
                    <li>Radio Waves — Used in Wi-Fi, Bluetooth</li>
                    <li>Microwaves — Used in satellite communication</li>
                    <li>Infrared — Used in remote controls</li>
                  </ul>
                </div>
              </div>
            </section> */}

            {/* Transmission Modes
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Transmission Modes</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Simplex</h3>
                  <p className="text-secondary font-poppins">
                    One-way communication only (e.g., keyboard to CPU or broadcast television).
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Half-Duplex</h3>
                  <p className="text-secondary font-poppins">
                    Two-way communication, but one direction at a time (e.g., walkie-talkies).
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Full-Duplex</h3>
                  <p className="text-secondary font-poppins">
                    Simultaneous two-way communication (e.g., telephones and modern computer networks).
                  </p>
                </div>
              </div>
            </section> */}

            {/* Real World Example
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Real-World Application</h2>
              <p className="text-secondary font-poppins leading-relaxed">
                When you send a file through email or upload a video to the internet, data transmission happens 
                through multiple stages and media — converting data into bits, sending it across fiber optics or 
                wireless networks, and reconstructing it at the destination. Error detection codes ensure your 
                file arrives intact and unchanged.
              </p>
            </section> */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Transmission;
