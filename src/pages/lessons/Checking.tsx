import { Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FloatingBubbles from '@/components/FloatingBubbles';

const Checking = () => {
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
              <Search className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl font-orbitron font-bold text-foreground mb-4">
              Error Checking
            </h1>
            <p className="text-xl text-secondary font-poppins">
              Analyzing received data for corruption
            </p>
          </div>

          <Card className="glass-dark p-8 space-y-6">
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">What is Error Checking?</h2>
              <p className="text-secondary font-poppins leading-relaxed">
                Error checking is the verification process where the receiver applies the same mathematical 
                algorithm used by the sender to recalculate redundancy bits from the received data. By comparing 
                these recalculated values with the transmitted redundancy bits, the receiver can determine if 
                errors occurred during transmission.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">The Checking Process</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">1. Data Extraction</h3>
                  <p className="text-secondary font-poppins">
                    Separate the received data into two parts: the original data bits and the redundancy 
                    (check) bits. The exact separation method depends on the error detection scheme being used.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">2. Recomputation</h3>
                  <p className="text-secondary font-poppins">
                    Apply the same error detection algorithm that the sender used on the received data bits. 
                    This generates a new set of check bits based on what was actually received.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">3. Comparison</h3>
                  <p className="text-secondary font-poppins">
                    Compare the recalculated check bits with the received check bits. If they match, the 
                    data is likely error-free. If they differ, an error has been detected.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">4. Decision Making</h3>
                  <p className="text-secondary font-poppins">
                    Based on the comparison result, decide whether to accept the data, attempt error correction 
                    (if using correcting codes), or request retransmission.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Checking Methods by Type</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Parity Check</h3>
                  <div className="font-mono text-sm space-y-1 mt-2">
                    <p className="text-secondary">Received: 10110110</p>
                    <p className="text-accent">Count 1s: 5 (odd)</p>
                    <p className="text-secondary">Expected parity: Even</p>
                    <p className="text-primary font-bold">Result: ERROR DETECTED</p>
                  </div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Checksum Check</h3>
                  <div className="font-mono text-sm space-y-1 mt-2">
                    <p className="text-secondary">Received data + checksum</p>
                    <p className="text-accent">Add all segments including checksum</p>
                    <p className="text-secondary">Check if sum = all 1s</p>
                    <p className="text-primary font-bold">If yes: VALID, else: ERROR</p>
                  </div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">CRC Check</h3>
                  <div className="font-mono text-sm space-y-1 mt-2">
                    <p className="text-secondary">Received: data + CRC</p>
                    <p className="text-accent">Divide by same polynomial</p>
                    <p className="text-secondary">Check remainder</p>
                    <p className="text-primary font-bold">Remainder = 0: VALID, else: ERROR</p>
                  </div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Hamming Check</h3>
                  <div className="font-mono text-sm space-y-1 mt-2">
                    <p className="text-secondary">Recalculate all parity bits</p>
                    <p className="text-accent">Compare with received parity bits</p>
                    <p className="text-secondary">Generate syndrome</p>
                    <p className="text-primary font-bold">Syndrome = 0: VALID, else: ERROR at position</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Error Detection vs. Correction</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">Error Detection</h3>
                  <p className="text-secondary font-poppins text-sm mb-2">
                    Simply identifies that an error occurred:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm">
                    <li>Parity bits</li>
                    <li>Checksums</li>
                    <li>CRC</li>
                    <li>Requires retransmission</li>
                  </ul>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">Error Correction</h3>
                  <p className="text-secondary font-poppins text-sm mb-2">
                    Identifies and fixes errors:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm">
                    <li>Hamming codes</li>
                    <li>Reed-Solomon codes</li>
                    <li>Turbo codes</li>
                    <li>No retransmission needed</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Performance Metrics</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li><span className="font-semibold text-accent">Detection Probability:</span> Likelihood of detecting an error when it occurs</li>
                <li><span className="font-semibold text-accent">False Positive Rate:</span> Incorrectly flagging valid data as corrupted</li>
                <li><span className="font-semibold text-accent">Undetected Error Rate:</span> Errors that slip through unnoticed</li>
                <li><span className="font-semibold text-accent">Processing Time:</span> Time required to perform error checking</li>
                <li><span className="font-semibold text-accent">Throughput Impact:</span> Effect on overall data transfer rate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Optimization Strategies</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Hardware Acceleration</h3>
                  <p className="text-secondary font-poppins">
                    Implement CRC and checksum calculations in dedicated hardware circuits for faster processing 
                    without burdening the CPU.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Parallel Processing</h3>
                  <p className="text-secondary font-poppins">
                    Process multiple data blocks simultaneously when checking large amounts of data, 
                    leveraging multi-core processors.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Selective Checking</h3>
                  <p className="text-secondary font-poppins">
                    Apply more stringent checking to critical data and lighter checking to less important data, 
                    balancing reliability with performance.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">When Errors Are Found</h2>
              <p className="text-secondary font-poppins mb-4">
                Upon detecting an error, the receiver can take several actions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Request retransmission using ARQ (Automatic Repeat Request) protocols</li>
                <li>Attempt error correction if using correcting codes</li>
                <li>Log the error for network diagnostics and monitoring</li>
                <li>Discard the corrupted data and wait for the next packet</li>
                <li>Switch to a backup communication path if available</li>
              </ul>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checking;
