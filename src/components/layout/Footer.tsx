import React from 'react';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h3 className={styles.h3}>
                        Cerveza El Clan
                    </h3>
                    <p></p>
                </div>
                <p className={styles.copyRight}>Derechos Reservados © {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;