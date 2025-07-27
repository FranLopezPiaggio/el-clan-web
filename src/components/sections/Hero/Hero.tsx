// components/Hero/Hero.tsx
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
  title = "Crafting Excellence in Every Brew",
  subtitle = "Discover the art of brewing with Brewery Co., where tradition meets innovation to create exceptional beers.",
  ctaText = "Explore Our Beers",
  onCtaClick,
  backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAvA5bTjeorNp0E6wOXFbQX3wMCTOATkohwk9pDgefTEmSwMHKWTRzurbskvEwOnSEHU0IOWfT7HMoJ3IVckN9YiEbcOil2K0ZRLJ44J4_8oNyNIc8YmlN-DsCBFS0fLz1zGDZzAtlP7dIuQwPDGMyNrZMVCAbK-5K6i14_X3FRUfqBqe-RMwApUCELCpEJIkpQ0rzYATSsOUKkmuLBsUxzhuGrgR12cF12HAFKqioJ6c7axn1L3jIwvveABhMqMlW0NRNm2TxAeRM"
}) => {
  return (
    <section className={styles.hero}>
      <div 
        className={styles.heroContent}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${backgroundImage}")` }}
      >
        <div className={styles.textContent}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>
        
        <button 
          className={styles.ctaButton}
          onClick={onCtaClick}
        >
          <span className={styles.ctaText}>{ctaText}</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;