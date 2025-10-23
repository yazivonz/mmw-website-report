import { Binary, Calculator, RefreshCw, Grid3x3 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const types = [
  {
    icon: Binary,
    title: 'Parity Bit',
    description: 'Simple error detection using a single check bit. Adds an extra bit to ensure even or odd parity in data transmission.',
    color: 'primary',
    link: '/lessons/parity-bit',
  },
  {
    icon: Calculator,
    title: 'Checksum',
    description: 'Sum-based verification method. Calculates the sum of data segments and verifies against the transmitted checksum value.',
    color: 'accent',
    link: '/lessons/checksum',
  },
  {
    icon: RefreshCw,
    title: 'Cyclic Redundancy Check',
    description: 'Polynomial division-based detection. Uses mathematical algorithms to detect burst errors and single-bit changes.',
    color: 'primary',
    link: '/lessons/crc',
  },
  {
    icon: Grid3x3,
    title: 'Hamming Code',
    description: 'Advanced error correction method. Not only detects but also corrects single-bit errors in transmitted data.',
    color: 'accent',
    link: '/lessons/hamming-code',
  },
];

const Types = () => {
  const navigate = useNavigate();
  
  return (
    <section id="types" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-4">
            Types of <span className="text-primary" style={{ textShadow: 'var(--glow-primary)' }}>Error Detecting Codes</span>
          </h2>
          <p className="text-xl text-secondary font-poppins max-w-3xl mx-auto">
            Different methods for different needs - from simple parity checks to advanced error correction
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {types.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card
                key={type.title}
                className="glass-dark p-6 hover:scale-105 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-primary animate-fade-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  boxShadow: '0 0 0 transparent',
                }}
                onClick={() => navigate(type.link)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--glow-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 transparent';
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center ${
                      type.color === 'primary' ? 'bg-primary/20 border-2 border-primary' : 'bg-accent/20 border-2 border-accent'
                    }`}
                  >
                    <Icon className={`w-10 h-10 ${type.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>

                  <h3 className="text-xl font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>

                  <p className="text-secondary font-poppins text-sm leading-relaxed">{type.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Types;
