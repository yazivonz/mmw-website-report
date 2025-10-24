import { Code, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FloatingBubbles from '@/components/FloatingBubbles';

const DataEncoding = () => {
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
              <Code className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl font-orbitron font-bold text-foreground mb-4">
              Data Encoding
            </h1>
            <p className="text-xl text-secondary font-poppins">
              Preparing data with error detection bits
            </p>
          </div>

          <Card className="glass-dark p-8 space-y-6">
            {/* 🔹 UPDATED SECTION */}
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">
                What is Data Encoding?
              </h2>
              <p className="text-secondary font-poppins leading-relaxed mb-4">
                Data encoding is the first crucial step in error detection where the original data is augmented 
                with additional bits calculated using mathematical algorithms. These extra bits enable the receiver 
                to verify data integrity and detect potential errors during transmission or storage.
              </p>

              {/* 🔹 HIGHLIGHTED COMMON METHODS SECTION */}
              <div className="relative p-6 rounded-2xl border-2 border-accent/50 bg-accent/10 shadow-lg backdrop-blur-md">
                <h3 className="absolute -top-4 left-4 bg-accent text-background px-4 py-1 rounded-full text-sm font-orbitron tracking-wide shadow-md">
                  Common Methods
                </h3>
                <ul className="list-disc pl-6 text-secondary font-poppins space-y-2 mt-4">
                  <li>
                    <span className="text-accent font-semibold">Parity Bit</span> – ensures even or odd total of 1’s.
                  </li>
                  <li>
                    <span className="text-accent font-semibold">Checksum</span> – sums the data segments to produce a verification value.
                  </li>
                  <li>
                    <span className="text-accent font-semibold">Cyclic Redundancy Check (CRC)</span> – divides data by a fixed polynomial and sends the remainder.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Encoding Examples</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">Parity Bit Encoding</h3>
                  <div className="font-mono text-sm space-y-1">
                    <p className="text-secondary">Original: 1011010</p>
                    <p className="text-accent">Count 1s: 4 (even)</p>
                    <p className="text-primary font-bold">Encoded: 10110100 (parity bit = 0)</p>
                  </div>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">CRC Encoding</h3>
                  <div className="font-mono text-sm space-y-1">
                    <p className="text-secondary">Data: 1101</p>
                    <p className="text-accent">Polynomial: x³ + x + 1 (1011)</p>
                    <p className="text-secondary">Append zeros: 1101000</p>
                    <p className="text-accent">Remainder: 110</p>
                    <p className="text-primary font-bold">Encoded: 1101110</p>
                  </div>
                </div>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataEncoding;
