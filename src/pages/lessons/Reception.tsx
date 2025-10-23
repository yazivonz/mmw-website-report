import { Radio, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FloatingBubbles from '@/components/FloatingBubbles';

const Reception = () => {
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
              <Radio className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl font-orbitron font-bold text-foreground mb-4">
              Data Reception
            </h1>
            <p className="text-xl text-secondary font-poppins">
              Receiving and preparing data for verification
            </p>
          </div>

          <Card className="glass-dark p-8 space-y-6">
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">What is Data Reception?</h2>
              <p className="text-secondary font-poppins leading-relaxed">
                Data reception is the critical stage where the transmitted signal arrives at the destination 
                and is converted back into digital data. The receiver must capture the signal, synchronize 
                with it, and prepare it for error checking while dealing with any distortions or noise 
                accumulated during transmission.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Reception Process</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">1. Signal Detection</h3>
                  <p className="text-secondary font-poppins">
                    The receiver's antenna or interface detects the incoming signal. In wireless systems, 
                    this involves capturing electromagnetic waves. In wired systems, it means detecting 
                    electrical or optical signals.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">2. Synchronization</h3>
                  <p className="text-secondary font-poppins">
                    The receiver must synchronize its clock with the sender's timing to accurately sample 
                    the signal at the right moments. This ensures bits are read at optimal points to 
                    minimize errors.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">3. Demodulation</h3>
                  <p className="text-secondary font-poppins">
                    The analog signal is converted back to digital form. This process reverses the 
                    modulation applied by the sender, extracting the original bit stream from the carrier signal.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">4. Buffer Storage</h3>
                  <p className="text-secondary font-poppins">
                    Received data is temporarily stored in a buffer while waiting for verification. This 
                    allows the error detection algorithm to process complete data blocks or frames.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Challenges in Reception</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Signal Attenuation</h3>
                  <p className="text-secondary font-poppins">
                    The signal weakens as it travels through the medium, making it harder to distinguish 
                    from background noise. Receivers must amplify weak signals without amplifying noise.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Timing Drift</h3>
                  <p className="text-secondary font-poppins">
                    Clock differences between sender and receiver can accumulate over time, causing the 
                    receiver to sample at incorrect moments and misinterpret bits.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Multi-path Interference</h3>
                  <p className="text-secondary font-poppins">
                    In wireless systems, signals can bounce off objects and arrive via multiple paths, 
                    causing interference and signal distortion.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Receiver Components</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">Physical Layer</h3>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm">
                    <li>Antenna or connector</li>
                    <li>Amplifier circuits</li>
                    <li>Signal filter</li>
                    <li>Analog-to-digital converter</li>
                  </ul>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">Data Link Layer</h3>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm">
                    <li>Frame synchronizer</li>
                    <li>Error detection module</li>
                    <li>Buffer memory</li>
                    <li>Protocol processor</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Reception Modes</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Asynchronous Reception</h3>
                  <p className="text-secondary font-poppins">
                    Data arrives at irregular intervals. Each byte or frame includes start and stop bits 
                    for synchronization. Simple but less efficient. Used in serial ports and UART.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Synchronous Reception</h3>
                  <p className="text-secondary font-poppins">
                    Continuous data stream with shared clock. More efficient but requires precise 
                    synchronization. Used in high-speed networks and modern communications.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Quality Indicators</h2>
              <p className="text-secondary font-poppins mb-4">
                Receivers monitor various metrics to assess signal quality:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li><span className="font-semibold text-accent">Signal Strength (RSS):</span> Received signal power level</li>
                <li><span className="font-semibold text-accent">Signal-to-Noise Ratio (SNR):</span> Signal power vs. noise power</li>
                <li><span className="font-semibold text-accent">Bit Error Rate (BER):</span> Percentage of corrupted bits</li>
                <li><span className="font-semibold text-accent">Frame Error Rate (FER):</span> Percentage of corrupted frames</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Preparing for Error Detection</h2>
              <p className="text-secondary font-poppins mb-4">
                Once data is successfully received and buffered, the receiver prepares for error checking:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li>Extract complete frames or data blocks from the buffer</li>
                <li>Identify the positions of redundancy bits</li>
                <li>Load the appropriate error detection algorithm</li>
                <li>Set up comparison structures for verification</li>
                <li>Prepare for potential retransmission requests</li>
              </ul>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reception;
