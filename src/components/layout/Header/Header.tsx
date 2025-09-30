// components/Header/Header.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/img/El-clan-calado-blanco.webp';
import styles from '@/styles/Header.module.css';

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

  // Mensaje predefinido para WhatsApp
  const whatsappLink = "https://wa.me/5491112345678?text=¡Hola!%20Quiero%20hacer%20una%20consulta%20sobre%20las%20cervezas%20de%20El%20Clan.";

  return (
    <header className={`${styles.mainHeader} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.mainHeader__container}>
        <nav className={styles.mainNav}>
          {/* Logo a la izquierda */}
          <div className={styles.mainHeader__logoLeft}>
            <Link href="/">
              <Image src={Logo} alt="Logo El Clan" className={styles.mainHeader__container__logo__img} />
            </Link>
          </div>
          {/* Links de navegación en el centro */}
          <div className={styles.mainNav__center}>
            <ul>
              <li>
                <Link href="/#historia" scroll={false} onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="/#catalog" scroll={false} onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Nuestras Cervezas
                </Link>
              </li>
            </ul>
          </div>
          {/* Icono de WhatsApp y botón de carrito a la derecha */}
          <div className={styles.mainNav__right}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappIcon}
              aria-label="Contactar por WhatsApp"
            >
              {/* SVG de WhatsApp */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <button className={styles.cartButton} aria-label="Ver carrito">
              {/* SVG de carrito simple */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16h9.334c.828 0 1.54-.672 1.658-1.493l1.334-9.34A1 1 0 0 0 18.667 4H5.333l-.195-1.138A1 1 0 0 0 4.158 2H2v2h1.333l2.6 15.447A2.001 2.001 0 0 0 7.334 20h9.334v-2H7.334l-.2-1.2z"/>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;