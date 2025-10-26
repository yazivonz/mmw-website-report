import { User } from 'lucide-react';

const reporters = [
  {
    surname: 'BALUARTE',
    name: 'Jazlyn Yvonne S.',
    // Place an image at public/reporters/baluarte.jpg (or change the path to your image)
    img: '/baluarte.jpg',
  },
  {
    surname: 'CIPRIANO',
    name: 'Yhanskie',
    img: '/cipriano.jpg',
  },
  {
    surname: 'LAZARO',
    name: 'Rizza S.',
    img: '/lazaro.jpg',
  },
];

const Reporter = () => {
  return (
    <section id="reporter" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Today's Reporter
          </h2>
          <p className="text-muted-foreground text-lg font-poppins">Presented by</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reporters.map((r) => (
              <div
                key={r.surname}
                className="glass-dark rounded-2xl p-6 backdrop-blur-xl border border-primary/20 shadow-neon hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="reporter-image-container relative">
                    <div className="w-44 md:w-56 h-72 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-4 border-primary/30 shadow-lg overflow-hidden">
                      {/* Image: put your files under public/reporters/ with the names referenced in reporters[].img */}
                      <img
                        src={r.img}
                        alt={`${r.surname} ${r.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* subtle glow/decor */}
                    <div className="reporter-glow"></div>
                  </div>

                  <div className="w-full text-center">
                    <div className="text-lg font-bold font-orbitron tracking-wider text-primary">
                      {r.surname}
                    </div>
                    <div className="text-sm text-muted-foreground font-poppins mt-1">
                      {r.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
