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
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">What is Data Encoding?</h2>
              <p className="text-secondary font-poppins leading-relaxed">
                Data encoding is the first crucial step in error detection where the original data is augmented 
                with additional bits calculated using mathematical algorithms. These extra bits enable the receiver 
                to verify data integrity and detect potential errors during transmission or storage.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">The Encoding Process</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">1. Input Data Preparation</h3>
                  <p className="text-secondary font-poppins">
                    The original message is converted into binary format if it isn't already. The data is 
                    organized into blocks or frames of specific sizes depending on the error detection method used.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">2. Algorithm Selection</h3>
                  <p className="text-secondary font-poppins">
                    Choose the appropriate error detection algorithm based on requirements: parity for simplicity, 
                    checksum for moderate reliability, CRC for high reliability, or Hamming code for error correction.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">3. Redundancy Calculation</h3>
                  <p className="text-secondary font-poppins">
                    Mathematical operations are performed on the data to generate redundant bits. This could be 
                    counting 1s (parity), summing segments (checksum), polynomial division (CRC), or matrix 
                    multiplication (Hamming).
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">4. Data Concatenation</h3>
                  <p className="text-secondary font-poppins">
                    The calculated redundant bits are appended or inserted at predetermined positions within 
                    the data stream, creating the final encoded message ready for transmission.
                  </p>
                </div>
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

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Key Considerations</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Trade-off between redundancy overhead and error detection capability</li>
                <li>Computational complexity and processing time</li>
                <li>Hardware vs. software implementation requirements</li>
                <li>Synchronization between sender and receiver on the encoding scheme</li>
                <li>Efficiency for the expected error patterns in the communication channel</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Benefits of Proper Encoding</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Enables automatic error detection at the receiver</li>
                <li>Improves overall data reliability</li>
                <li>Reduces need for retransmissions</li>
                <li>Provides mathematical guarantee of error detection capability</li>
                <li>Foundation for building robust communication systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Industry Standards</h2>
              <p className="text-secondary font-poppins mb-4">
                Various industry standards specify encoding requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>IEEE 802.3 (Ethernet): CRC-32 encoding</li>
                <li>USB protocol: CRC-5 and CRC-16 encoding</li>
                <li>JPEG images: Huffman encoding with error resilience</li>
                <li>QR codes: Reed-Solomon error correction encoding</li>
              </ul>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataEncoding;
