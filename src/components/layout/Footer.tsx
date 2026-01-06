import React from 'react';
import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import logoImage from '@/assets/img/el-clan-logo-blanco.jpg';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <Image src={logoImage} alt="Logo" width={100} height={100} />
                    <p></p>
                </div>
                <div>
                    <a href="https://www.instagram.com/elclan_cerveceria/" target="_blank" rel="noopener noreferrer">
                    </a>
                </div>
            </div>
            <p className={styles.copyRight}>Derechos Reservados © {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;