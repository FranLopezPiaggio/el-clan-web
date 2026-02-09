import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import logoImage from '@/assets/img/el-clan-logo-blanco.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-black border-t border-white/10">
      {/* Main Footer */}
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#hero" className="inline-block mb-6">
              {/* <span className="text-3xl font-bold tracking-wider text-pure-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                PATAGONIA<span className="text-patagonia-gold">BREW</span>
              </span> */}
              <Image src={logoImage} alt="Logo" width={100} height={100} />
            </a>
            <p className="text-sm text-pure-white/60 leading-relaxed mb-6">
              Cerveza artesanal elaborada en el corazón de la Patagonia chilena.
              Tradición, calidad y pasión en cada botella.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-pure-white/60 hover:border-patagonia-gold hover:text-patagonia-gold transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-pure-white/60 hover:border-patagonia-gold hover:text-patagonia-gold transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-pure-white uppercase tracking-wider mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '#hero' },
                { name: 'Catálogo', href: '#catalogo' },
                { name: 'Nuestra Historia', href: '#historia' },
                { name: 'Contacto', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-pure-white/60 hover:text-patagonia-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-pure-white uppercase tracking-wider mb-6">
              Nuestras Cervezas
            </h4>
            <ul className="space-y-3">
              {[
                'Patagonia IPA',
                'Noche Stout',
                'Dorada Lager',
                'Roja del Sur',
              ].map((cerveza) => (
                <li key={cerveza}>
                  <a
                    href="#catalogo"
                    className="text-sm text-pure-white/60 hover:text-patagonia-gold transition-colors duration-300"
                  >
                    {cerveza}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-pure-white uppercase tracking-wider mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-patagonia-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-pure-white/60">
                  Av. Vicente Pérez Rosales 1234<br />
                  Puerto Varas, Chile
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-patagonia-gold flex-shrink-0" />
                <a
                  href="tel:+56652223344"
                  className="text-sm text-pure-white/60 hover:text-patagonia-gold transition-colors"
                >
                  +56 65 222 3344
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-patagonia-gold flex-shrink-0" />
                <a
                  href="mailto:hola@patagoniabrew.cl"
                  className="text-sm text-pure-white/60 hover:text-patagonia-gold transition-colors"
                >
                  hola@patagoniabrew.cl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-pure-white/40 text-center sm:text-left">
              {currentYear} Patagonia Brew. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-pure-white/40 hover:text-patagonia-gold transition-colors"
              >
                Términos y Condiciones
              </a>
              <a
                href="#"
                className="text-xs text-pure-white/40 hover:text-patagonia-gold transition-colors"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
