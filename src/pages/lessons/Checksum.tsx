import { Calculator, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FloatingBubbles from '@/components/FloatingBubbles';

const Checksum = () => {
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
            <div className="inline-block p-4 rounded-full bg-accent/20 border-2 border-accent mb-4">
              <Calculator className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-5xl font-orbitron font-bold text-foreground mb-4">
              Checksum
            </h1>
            <p className="text-xl text-secondary font-poppins">
              Sum-based verification method for data integrity
            </p>
          </div>

          <Card className="glass-dark p-8 space-y-6">
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">What is a Checksum?</h2>
              <p className="text-secondary font-poppins leading-relaxed">
                A checksum is a calculated value used to verify the integrity of data by summing up data segments. 
                The receiver performs the same calculation and compares it with the transmitted checksum to detect errors.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 1: Divide Data</h3>
                  <p className="text-secondary font-poppins">
                    The data is divided into fixed-size segments (e.g., 16-bit or 32-bit blocks).
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 2: Sum Calculation</h3>
                  <p className="text-secondary font-poppins">
                    All segments are added together. If overflow occurs, it's wrapped around and added back.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 3: Complement</h3>
                  <p className="text-secondary font-poppins">
                    The one's complement of the sum is taken to create the checksum value.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 4: Verification</h3>
                  <p className="text-secondary font-poppins">
                    The receiver adds all segments including the checksum. If the result is all 1s, data is valid.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Example</h2>
              <div className="glass p-6 rounded-lg font-mono text-sm">
                <p className="text-accent mb-2">Data Segments:</p>
                <p className="text-secondary">10110011 10101100 11010101</p>
                <p className="text-accent mt-4 mb-2">Sum:</p>
                <p className="text-secondary">100100100 (with carry)</p>
                <p className="text-accent mt-4 mb-2">Checksum (1's complement):</p>
                <p className="text-primary font-bold">11011011</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Advantages</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>More robust than parity bits</li>
                <li>Can detect multiple bit errors</li>
                <li>Simple calculation process</li>
                <li>Widely supported in protocols</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Limitations</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Cannot detect all error patterns</li>
                <li>May miss burst errors</li>
                <li>Cannot correct errors</li>
                <li>Vulnerable to systematic errors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Real-World Applications</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Internet Protocol (IP) headers</li>
                <li>TCP/UDP network protocols</li>
                <li>File download verification</li>
                <li>Data transmission in networks</li>
              </ul>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checksum;
