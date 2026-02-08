import { Award, Leaf, Users, Clock } from 'lucide-react';

const Historia = () => {
  const valores = [
    {
      icon: Leaf,
      titulo: 'Ingredientes Locales',
      descripcion: 'Trabajamos directamente con agricultores patagónicos para obtener la mejor malta y lúpulo.',
    },
    {
      icon: Clock,
      titulo: 'Proceso Artesanal',
      descripcion: 'Cada lote es elaborado a mano con técnicas tradicionales y tiempos de fermentación naturales.',
    },
    {
      icon: Award,
      titulo: 'Calidad Premium',
      descripcion: 'Ganadores de múltiples premios internacionales por la excelencia de nuestras cervezas.',
    },
    {
      icon: Users,
      titulo: 'Comunidad',
      descripcion: 'Apoyamos eventos locales y creamos espacios para que los amantes de la cerveza se conecten.',
    },
  ];

  return (
    <section id="historia" className="py-20 sm:py-28 lg:py-32 bg-craft-beige">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left Column - Text */}
          <div>
            <span className="inline-block text-sm font-medium text-deep-black/60 tracking-widest uppercase mb-4">
              Desde 2012
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-deep-black mb-6">
              NUESTRA
              <br />
              <span className="text-patagonia-gold">HISTORIA</span>
            </h2>
            <div className="space-y-4 text-deep-black/80 leading-relaxed">
              <p>
                Todo comenzó en un pequeño garaje en Puerto Varas, donde dos amigos 
                apasionados por la cerveza decidieron experimentar con recetas 
                tradicionales patagónicas. Lo que empezó como un hobby se convirtió 
                en una obsesión por crear la cerveza perfecta.
              </p>
              <p>
                Hoy, más de una década después, seguimos manteniendo ese espíritu 
                artesanal que nos define. Cerveza Patagonia Brew es el resultado de 
                años de perfeccionamiento, respeto por los ingredientes naturales y 
                un compromiso inquebrantable con la calidad.
              </p>
              <p>
                Nuestra cervecería, ubicada en el corazón de la Patagonia chilena, 
                utiliza agua pura de deshielo andino y los mejores ingredientes 
                locales para crear cervezas que capturan la esencia única de esta 
                tierra mágica.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-deep-black/10">
              <p className="text-deep-black/60 text-sm italic">
                "Cada botella lleva consigo el espíritu indomable de la Patagonia"
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-deep-black flex items-center justify-center">
                  <span className="text-patagonia-gold font-bold text-lg">P</span>
                </div>
                <div>
                  <p className="font-semibold text-deep-black">Pedro & Martín</p>
                  <p className="text-sm text-deep-black/60">Fundadores</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="/cerveza-ipa.jpg"
                  alt="Proceso de elaboración"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg bg-deep-black/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-patagonia-gold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    12
                  </div>
                  <div className="text-sm text-deep-black/60 uppercase tracking-wider">
                    Años de<br />tradición
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-lg bg-deep-black/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-patagonia-gold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    50K
                  </div>
                  <div className="text-sm text-deep-black/60 uppercase tracking-wider">
                    Botellas<br />al año
                  </div>
                </div>
              </div>
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="/cerveza-stout.jpg"
                  alt="Nuestra cervecería"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="pt-16 border-t border-deep-black/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-deep-black mb-4">
              NUESTROS VALORES
            </h3>
            <p className="text-deep-black/60 max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos y cada cerveza que elaboramos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-deep-black/5 hover:bg-deep-black/10 transition-colors duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-deep-black flex items-center justify-center">
                  <valor.icon size={24} className="text-patagonia-gold" />
                </div>
                <h4 className="text-lg font-bold text-deep-black mb-2">
                  {valor.titulo}
                </h4>
                <p className="text-sm text-deep-black/60 leading-relaxed">
                  {valor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
