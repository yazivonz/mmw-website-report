import { RefreshCw, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FloatingBubbles from '@/components/FloatingBubbles';

const CRC = () => {
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
              <RefreshCw className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl font-orbitron font-bold text-foreground mb-4">
              Cyclic Redundancy Check (CRC)
            </h1>
            <p className="text-xl text-secondary font-poppins">
              Polynomial division-based error detection
            </p>
          </div>

          <Card className="glass-dark p-8 space-y-6">
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">What is CRC?</h2>
              <p className="text-secondary font-poppins leading-relaxed">
                Cyclic Redundancy Check (CRC) is a powerful error-detecting code commonly used in digital networks 
                and storage devices. It uses polynomial division to generate a check value from the data, which is 
                appended to the data before transmission or storage.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 1: Choose Polynomial</h3>
                  <p className="text-secondary font-poppins">
                    Select a generator polynomial (divisor). Common ones include CRC-16, CRC-32, etc.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 2: Append Zeros</h3>
                  <p className="text-secondary font-poppins">
                    Append n zeros to the data, where n is the degree of the polynomial.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 3: Binary Division</h3>
                  <p className="text-secondary font-poppins">
                    Perform modulo-2 binary division using XOR operations instead of subtraction.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Step 4: CRC Generation</h3>
                  <p className="text-secondary font-poppins">
                    The remainder from division becomes the CRC, which is appended to the original data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Common CRC Polynomials</h2>
              <div className="glass p-6 rounded-lg space-y-3 font-mono text-sm">
                <div>
                  <p className="text-accent mb-1">CRC-8:</p>
                  <p className="text-secondary">x⁸ + x² + x + 1</p>
                </div>
                <div>
                  <p className="text-accent mb-1">CRC-16 (CCITT):</p>
                  <p className="text-secondary">x¹⁶ + x¹² + x⁵ + 1</p>
                </div>
                <div>
                  <p className="text-accent mb-1">CRC-32 (IEEE 802.3):</p>
                  <p className="text-secondary">x³² + x²⁶ + x²³ + ... + x² + x + 1</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Advantages</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Detects burst errors effectively</li>
                <li>High error detection rate</li>
                <li>Can detect single, double, and odd number of errors</li>
                <li>Efficient hardware implementation</li>
                <li>Well-suited for transmission over noisy channels</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Limitations</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>More complex than simple checksums</li>
                <li>Cannot correct errors, only detect</li>
                <li>Computational overhead for software implementations</li>
                <li>Requires agreement on polynomial between sender and receiver</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Real-World Applications</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Ethernet and network communications (IEEE 802.3)</li>
                <li>Storage devices (hard drives, SSDs)</li>
                <li>ZIP file compression</li>
                <li>PNG image format</li>
                <li>Bluetooth and USB protocols</li>
                <li>Digital television broadcasting</li>
              </ul>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CRC;
