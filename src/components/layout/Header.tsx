'use client'

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Header.module.css';
import logoImage from '@/assets/img/el-clan-logo-blanco.jpg';

type HeaderProps = {
    logoSrc?: StaticImageData | string;
    logoAlt?: string;
    onCTAClick?: () => void;
};

const Header = (({
    logoSrc = logoImage,
    logoAlt = 'Cerveza El Clan',
    onCTAClick
}: HeaderProps) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCTAClick = () => {
        // Aquí conectarás el modal más adelante
        onCTAClick?.();
    };

    const handleOpenModal = () => {
        console.log('Abrir modal de pedido'); // placeholder
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link
                    href="/"
                    className={styles.logo}
                    aria-label="Ir al inicio"
                >
                    <Image
                        src={logoSrc}
                        alt={logoAlt}
                        width={120}
                        height={60}
                    />
                </Link>

                <nav className={styles.nav} aria-label="Navegación principal">
                    <ul className={styles.navList}>
                        <li>
                            <Link href="#nosotros" className={styles.link}>
                                nosotros
                            </Link>
                        </li>
                        <li>
                            <Link href="#cervezas" className={styles.link}>
                                nuestras cervezas
                            </Link>
                        </li>
                    </ul>
                    {/* CTA Button */}
                    <button
                        className={styles.ctaButton}
                        onClick={handleCTAClick}
                        aria-label="Abrir formulario de pedido"
                        type="button"
                    >
                        hace tu pedido
                    </button>

                    {/* Mobile Menu Toggle (preparado para responsive) */}
                    <button
                        className={styles.menuToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Abrir menú"
                        aria-expanded={isMenuOpen}
                        type="button"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
        </header>
    );
});

export default Header;
