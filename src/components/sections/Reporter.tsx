import { User } from 'lucide-react';

const Reporter = () => {
  return (
    <section id="reporter" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Today's Reporter
          </h2>
          <p className="text-muted-foreground text-lg font-poppins">
            Presented by
          </p>
        </div>

        {/* Reporter Containers - 3 reporters */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reporter 1 */}
            <div className="glass-dark rounded-2xl p-6 backdrop-blur-xl border border-primary/20 shadow-neon hover:border-primary/40 transition-all duration-300">
              <div className="flex flex-col items-center gap-4">
                {/* Placeholder for reporter image */}
                <div className="reporter-image-container relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-4 border-primary/30 shadow-lg">
                    <User className="w-16 h-16 text-primary/50" />
                  </div>
                  <div className="reporter-glow"></div>
                </div>

                {/* Placeholder for reporter info */}
                <div className="w-full text-center space-y-3">
                  <div className="h-6 bg-primary/10 rounded-lg w-full animate-pulse"></div>
                  <div className="h-4 bg-primary/10 rounded-lg w-3/4 mx-auto animate-pulse"></div>
                  <div className="h-3 bg-primary/10 rounded-lg w-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Reporter 2 */}
            <div className="glass-dark rounded-2xl p-6 backdrop-blur-xl border border-primary/20 shadow-neon hover:border-primary/40 transition-all duration-300">
              <div className="flex flex-col items-center gap-4">
                {/* Placeholder for reporter image */}
                <div className="reporter-image-container relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-4 border-primary/30 shadow-lg">
                    <User className="w-16 h-16 text-primary/50" />
                  </div>
                  <div className="reporter-glow"></div>
                </div>

                {/* Placeholder for reporter info */}
                <div className="w-full text-center space-y-3">
                  <div className="h-6 bg-primary/10 rounded-lg w-full animate-pulse"></div>
                  <div className="h-4 bg-primary/10 rounded-lg w-3/4 mx-auto animate-pulse"></div>
                  <div className="h-3 bg-primary/10 rounded-lg w-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Reporter 3 */}
            <div className="glass-dark rounded-2xl p-6 backdrop-blur-xl border border-primary/20 shadow-neon hover:border-primary/40 transition-all duration-300">
              <div className="flex flex-col items-center gap-4">
                {/* Placeholder for reporter image */}
                <div className="reporter-image-container relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-4 border-primary/30 shadow-lg">
                    <User className="w-16 h-16 text-primary/50" />
                  </div>
                  <div className="reporter-glow"></div>
                </div>

                {/* Placeholder for reporter info */}
                <div className="w-full text-center space-y-3">
                  <div className="h-6 bg-primary/10 rounded-lg w-full animate-pulse"></div>
                  <div className="h-4 bg-primary/10 rounded-lg w-3/4 mx-auto animate-pulse"></div>
                  <div className="h-3 bg-primary/10 rounded-lg w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground font-poppins text-sm">
              Reporter information will be added here
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Reporter;
