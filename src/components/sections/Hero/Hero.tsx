'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Hero.module.css';

import Brewery from '@/assets/img/breweryCo.png';
import Hops from '@/assets/img/hops.webp';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string; // Se mantiene para compatibilidad, pero no se usa en el carrusel
}

const imagenesCarrusel = [
  Brewery.src,
  Hops.src
];

const Hero: React.FC<HeroProps> = ({
  title = "Conoce nuestras cervezas, forma parte de El Clan.",
  subtitle = "Conoce nuestras cervezas, forma parte de El Clan.",
  ctaText = "Conoce nuestras cervezas",
  onCtaClick,
}) => {
  // Estado para el índice de la imagen actual del carrusel
  const [indiceActual, setIndiceActual] = useState(0);
  const intervaloRef = useRef<NodeJS.Timeout | null>(null);

  // Cambia la imagen cada 4 segundos
  useEffect(() => {
    intervaloRef.current = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % imagenesCarrusel.length);
    }, 4000);
    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
    };
  }, []);

  // Función para hacer scroll suave al componente Catalog
  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <section className={styles.hero} style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${imagenesCarrusel[indiceActual]}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.8s ease-in-out'
        }}
        aria-hidden="true"
      />
      <div className="container">
        <div className={styles.heroContent} style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
          </div>
          <button
            className={styles.ctaButton}
            onClick={handleCtaClick}
          >
            <span className={styles.ctaText}>{ctaText}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;