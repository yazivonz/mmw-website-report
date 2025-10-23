import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FloatingBubbles from '@/components/FloatingBubbles';

const Detection = () => {
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
              <CheckCircle className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-5xl font-orbitron font-bold text-foreground mb-4">
              Error Detection
            </h1>
            <p className="text-xl text-secondary font-poppins">
              Confirming data integrity or flagging errors
            </p>
          </div>

          <Card className="glass-dark p-8 space-y-6">
            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">What is Error Detection?</h2>
              <p className="text-secondary font-poppins leading-relaxed">
                Error detection is the final confirmation step where the system definitively determines whether 
                the received data is intact or corrupted. Based on this determination, appropriate actions are 
                taken to either deliver the data to the application layer or initiate recovery procedures.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Detection Outcomes</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg border-2 border-accent/50">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">✓ No Error Detected</h3>
                  <p className="text-secondary font-poppins mb-3">
                    The verification succeeded, meaning the recalculated check bits match the received ones.
                  </p>
                  <p className="text-primary font-semibold">Actions taken:</p>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm mt-2">
                    <li>Data is passed to higher protocol layers</li>
                    <li>Acknowledge receipt to sender (ACK)</li>
                    <li>Update statistics and logs</li>
                    <li>Prepare to receive next data block</li>
                  </ul>
                </div>
                <div className="glass p-4 rounded-lg border-2 border-destructive/50">
                  <h3 className="text-xl font-orbitron font-semibold text-destructive mb-2">✗ Error Detected</h3>
                  <p className="text-secondary font-poppins mb-3">
                    The verification failed, indicating corruption occurred during transmission.
                  </p>
                  <p className="text-primary font-semibold">Actions taken:</p>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm mt-2">
                    <li>Discard corrupted data</li>
                    <li>Send negative acknowledgment (NAK)</li>
                    <li>Request retransmission</li>
                    <li>Log error for diagnostics</li>
                    <li>Possibly switch to backup channel</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Detection Protocols</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Stop-and-Wait ARQ</h3>
                  <p className="text-secondary font-poppins mb-2">
                    Sender transmits one frame and waits for acknowledgment before sending the next.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm">
                    <li>Simple implementation</li>
                    <li>Low throughput due to waiting</li>
                    <li>Good for high-latency links</li>
                  </ul>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Go-Back-N ARQ</h3>
                  <p className="text-secondary font-poppins mb-2">
                    Sender can transmit multiple frames before receiving acknowledgments. If error detected, 
                    resend from that point.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm">
                    <li>Better throughput than stop-and-wait</li>
                    <li>Wastes bandwidth on retransmissions</li>
                    <li>Used in TCP</li>
                  </ul>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Selective Repeat ARQ</h3>
                  <p className="text-secondary font-poppins mb-2">
                    Only retransmit frames that were actually corrupted, not all subsequent frames.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-secondary font-poppins text-sm">
                    <li>Most efficient use of bandwidth</li>
                    <li>More complex implementation</li>
                    <li>Requires larger buffers</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Error Recovery Strategies</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">Forward Error Correction (FEC)</h3>
                  <p className="text-secondary font-poppins text-sm">
                    Add enough redundancy that receiver can correct errors without retransmission. 
                    Used in real-time applications like streaming.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">Backward Error Correction (BEC)</h3>
                  <p className="text-secondary font-poppins text-sm">
                    Detect errors and request retransmission. More bandwidth-efficient when errors 
                    are rare. Used in file transfers.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Detection Reliability</h2>
              <div className="space-y-3">
                <div className="glass p-4 rounded-lg">
                  <p className="text-accent font-semibold mb-2">Not All Errors Are Detectable</p>
                  <p className="text-secondary font-poppins text-sm">
                    If errors occur in patterns that produce valid check values, they may go undetected. 
                    This is why choosing the right error detection method matters.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <p className="text-accent font-semibold mb-2">Detection Probability</p>
                  <p className="text-secondary font-poppins text-sm">
                    CRC-32 can detect 99.9999997% of errors. Parity can only guarantee detection of 
                    single-bit errors. The more redundancy, the higher the detection rate.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Real-World Detection Examples</h2>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Web Browsing (TCP/IP)</h3>
                  <p className="text-secondary font-poppins text-sm">
                    Every TCP packet includes a checksum. If the checksum fails, TCP automatically requests 
                    retransmission without you noticing. This ensures web pages load correctly.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">File Downloads</h3>
                  <p className="text-secondary font-poppins text-sm">
                    When you download a file, the checksum or MD5 hash is often provided. Your system 
                    recalculates it after download to confirm the file wasn't corrupted.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">QR Codes</h3>
                  <p className="text-secondary font-poppins text-sm">
                    QR codes use Reed-Solomon error correction. Even if parts are damaged or dirty, 
                    the code can still be read because errors are detected and corrected.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">Credit Card Numbers</h3>
                  <p className="text-secondary font-poppins text-sm">
                    The last digit of credit card numbers is a check digit calculated using the Luhn algorithm. 
                    This catches typos when entering card numbers online.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">Impact on System Performance</h2>
              <ul className="list-disc list-inside space-y-2 text-secondary font-poppins">
                <li><span className="font-semibold text-accent">Latency:</span> Detection adds processing time, but usually negligible (microseconds)</li>
                <li><span className="font-semibold text-accent">Bandwidth:</span> Redundancy bits consume 1-10% of bandwidth depending on method</li>
                <li><span className="font-semibold text-accent">Throughput:</span> Retransmissions reduce effective data rate in noisy channels</li>
                <li><span className="font-semibold text-accent">Reliability:</span> Dramatic improvement in data accuracy (99.9%+ success rate)</li>
                <li><span className="font-semibold text-accent">CPU Usage:</span> Hardware acceleration makes detection very efficient</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">The Silent Guardian</h2>
              <div className="glass p-6 rounded-lg border-2 border-primary/50">
                <p className="text-secondary font-poppins leading-relaxed">
                  Error detection works behind the scenes, billions of times per second, ensuring that your 
                  video calls don't glitch, your messages arrive intact, your files download correctly, and 
                  your online banking transactions are accurate. It's the invisible shield protecting every 
                  bit of data flowing through the digital world.
                </p>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Detection;
