import { Twitter, Github, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-gradient-to-b from-card to-background border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="text-center">
            <h3 className="text-2xl font-orbitron font-bold text-primary animate-pulse-glow mb-2">
              ErrorDetectingCodes
            </h3>
          </div>


          {/* Copyright */}
          <div className="text-center text-secondary font-poppins text-sm">
            <p>© 2025 BSIT | Project Report By: BALUARTE | CIPRIANO | LAZARO </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary hover:bg-accent text-background shadow-neon-lg animate-float z-40"
        size="icon"
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </footer>
  );
};

export default Footer;
