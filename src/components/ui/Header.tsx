'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import { CartButton } from '@/components/orders/CartButton';


import Image from 'next/image';
import LogoImg from '@/assets/img/El-clan-calado-blanco.jpg';

type HeaderProps = {
  onCartButtonClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onCartButtonClick }) => {
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
              {/* Solución 1: Usar el componente Image de Next.js */}
              <Image
                src={LogoImg}
                alt="Logo"
                className={styles.mainHeader__container__logo__img}
                width={120}
                height={120}
                priority
              />
            </Link>
          </div>
          <div className={styles.mainNav__right}>
            <ul>
              <li><Link href="/#catalog" scroll={false} onClick={(e) => {
                e.preventDefault();
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }}>Nuestras Cervezas</Link></li>
              <li className={styles.cartButtonContainer}>
                <CartButton onClick={onCartButtonClick} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;