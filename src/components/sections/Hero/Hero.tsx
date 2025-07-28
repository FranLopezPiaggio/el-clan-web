// components/Hero/Hero.tsx
'use client';
import React from 'react';
import styles from '@/styles/Hero.module.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Creando una cerveza artesanal de calidad",
  subtitle = "Discover the art of brewing with Brewery Co., where tradition meets innovation to create exceptional beers.",
  ctaText = "Conoce nuestras cervezas",
  onCtaClick,
  backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAvA5bTjeorNp0E6wOXFbQX3wMCTOATkohwk9pDgefTEmSwMHKWTRzurbskvEwOnSEHU0IOWfT7HMoJ3IVckN9YiEbcOil2K0ZRLJ44J4_8oNyNIc8YmlN-DsCBFS0fLz1zGDZzAtlP7dIuQwPDGMyNrZMVCAbK-5K6i14_X3FRUfqBqe-RMwApUCELCpEJIkpQ0rzYATSsOUKkmuLBsUxzhuGrgR12cF12HAFKqioJ6c7axn1L3jIwvveABhMqMlW0NRNm2TxAeRM"
}) => {
  // Función para hacer scroll suave al componente Catalog
  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Busca el elemento con id 'catalog' y hace scroll suave
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Si el usuario pasó una función personalizada, también la ejecuta
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
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
    </section>
  );
};

export default Hero;