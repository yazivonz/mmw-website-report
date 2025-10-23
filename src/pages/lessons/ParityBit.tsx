import { Binary, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FloatingBubbles from '@/components/FloatingBubbles';

const ParityBit = () => {
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
              <Binary className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl font-orbitron font-bold text-foreground mb-4">
              Parity Bit
            </h1>
            <p className="text-xl text-secondary font-poppins">
              Simple error detection using a single check bit
            </p>
          </div>

          <Card className="glass-dark p-8 space-y-6">
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">What is a Parity Bit?</h2>
              <p className="text-secondary font-poppins leading-relaxed">
                A parity bit is an extra bit added to a string of binary data to ensure that the total number of 1-bits 
                in the string is either even (even parity) or odd (odd parity). It's the simplest form of error detection 
                in digital communication.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Even Parity</h3>
                  <p className="text-secondary font-poppins">
                    The parity bit is set to make the total count of 1s even.
                    <br />
                    Example: Data = 1011001 (four 1s) → Parity bit = 0 → Final: 10110010
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Odd Parity</h3>
                  <p className="text-secondary font-poppins">
                    The parity bit is set to make the total count of 1s odd.
                    <br />
                    Example: Data = 1011001 (four 1s) → Parity bit = 1 → Final: 10110011
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Advantages</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Extremely simple to implement</li>
                <li>Minimal overhead (only 1 bit added)</li>
                <li>Fast computation</li>
                <li>Low resource usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Limitations</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Can only detect single-bit errors</li>
                <li>Cannot detect even number of bit errors</li>
                <li>Cannot correct errors, only detect them</li>
                <li>Not suitable for noisy channels</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Real-World Applications</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Serial communication protocols (UART, RS-232)</li>
                <li>Memory systems (RAM parity checking)</li>
                <li>Legacy computer systems</li>
                <li>Simple data transmission</li>
              </ul>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParityBit;
