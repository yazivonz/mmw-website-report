import { Grid3x3, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FloatingBubbles from '@/components/FloatingBubbles';

const HammingCode = () => {
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
              <Grid3x3 className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-5xl font-orbitron font-bold text-foreground mb-4">
              Hamming Code
            </h1>
            <p className="text-xl text-secondary font-poppins">
              Advanced error correction and detection method
            </p>
          </div>

          <Card className="glass-dark p-8 space-y-6">
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">What is Hamming Code?</h2>
              <p className="text-secondary font-poppins leading-relaxed">
                Hamming Code is a set of error-correction codes that can detect and correct single-bit errors. 
                Unlike parity or checksum, Hamming codes not only identify that an error occurred but also 
                pinpoint its exact location and fix it automatically.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 1: Position Parity Bits</h3>
                  <p className="text-secondary font-poppins">
                    Parity bits are placed at positions that are powers of 2 (1, 2, 4, 8, 16, ...).
                    Data bits fill the remaining positions.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 2: Calculate Parity</h3>
                  <p className="text-secondary font-poppins">
                    Each parity bit covers specific positions based on binary representation.
                    P1 covers positions where bit 0 is 1, P2 covers positions where bit 1 is 1, etc.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 3: Error Detection</h3>
                  <p className="text-secondary font-poppins">
                    At the receiver, parity bits are recalculated. The syndrome (XOR of all parity checks) 
                    indicates the error position.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 4: Error Correction</h3>
                  <p className="text-secondary font-poppins">
                    If syndrome is non-zero, flip the bit at the position indicated by the syndrome value.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Example: Hamming(7,4)</h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <div>
                  <p className="text-accent mb-2">Data bits: 1011</p>
                  <p className="text-secondary font-mono">
                    Position: 1 2 3 4 5 6 7
                    <br />
                    Content:  P P D P D D D
                    <br />
                    Bits:     ? ? 1 ? 0 1 1
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-accent mb-2">After calculating parity:</p>
                  <p className="text-primary font-mono font-bold">
                    Final: 0 0 1 1 0 1 1
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Hamming Distance</h2>
              <p className="text-secondary font-poppins leading-relaxed mb-4">
                The Hamming distance between two bit strings is the number of positions where they differ. 
                A code with minimum Hamming distance d can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Detect up to (d-1) errors</li>
                <li>Correct up to ⌊(d-1)/2⌋ errors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Advantages</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Can correct single-bit errors automatically</li>
                <li>Can detect double-bit errors</li>
                <li>Efficient for memory systems</li>
                <li>Predictable overhead (log₂(n) parity bits for n-bit data)</li>
                <li>Real-time error correction capability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Limitations</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Can only correct single-bit errors</li>
                <li>More overhead than simple parity</li>
                <li>Not effective for burst errors</li>
                <li>Complex implementation compared to basic methods</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Real-World Applications</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>ECC (Error-Correcting Code) memory in servers</li>
                <li>RAID storage systems</li>
                <li>Satellite communications</li>
                <li>Embedded systems and microcontrollers</li>
                <li>Computer RAM (SEC-DED: Single Error Correction, Double Error Detection)</li>
                <li>Network protocols requiring reliability</li>
              </ul>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HammingCode;
