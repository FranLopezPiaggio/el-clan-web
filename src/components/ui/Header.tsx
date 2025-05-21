'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

const Logo = './img/El_Clan_Logo.png'

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || window.scrollY === 0);
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);
  return (
    <header className={`${styles.mainHeader} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.mainHeader__container}>
        <nav className={styles.mainNav}>
          <div className={styles.mainNav__left}>
            <ul>
              <li><Link href="/#historia" scroll={false} onClick={(e) => {
                e.preventDefault();
                document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' });
              }}>Nuestra Historia</Link></li>
            </ul>
          </div>
          <div className={styles.mainHeader__container__logo}>
            <Link href="/">
              <img src={Logo} alt="Logo" className={styles.mainHeader__container__logo__img} />
            </Link>
          </div>
          <div className={styles.mainNav__right}>
            <ul>
              <li><Link href="/#catalog" scroll={false} onClick={(e) => {
                e.preventDefault();
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }}>Nuestras Cervezas</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;