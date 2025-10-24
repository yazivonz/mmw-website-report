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
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-4">
                What is Data Reception?
              </h2>
              <p className="text-secondary font-poppins leading-relaxed mb-4">
                At the receiving end, the encoded data (which includes both the original bits and the redundant bits) 
                is collected and stored temporarily for verification. The receiver then applies the same error 
                detection algorithm used by the sender to recompute what the check bits should be. This ensures that 
                data integrity can be verified before the system accepts or processes it further.
              </p>

              <div className="glass p-4 rounded-lg">
                <h3 className="text-xl font-orbitron font-semibold text-accent mb-2">
                  Example:
                </h3>
                <p className="text-secondary font-poppins">
                  If the sender transmitted <span className="font-mono text-primary">1010001</span> with a parity bit 
                  <span className="font-mono text-primary"> 1 </span> (making the total number of 1’s even), 
                  the receiver also counts the 1’s. If the count is not even, an error is detected, and the 
                  data is flagged for retransmission.
                </p>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reception;
