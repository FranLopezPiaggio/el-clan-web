'use client';

import styles from '@/styles/Hero.module.css';
import { useOrderModal } from '@/contexts/OrderModalContext';

const Hero = () => {
    const { openModal } = useOrderModal();

    return (
        <section
            className={styles.heroContainer}
            style={{ backgroundImage: 'url(/brewery-steel-factory.png)' }}
        >
            <div className={styles.heroOverlay}>
                <div className={styles.heroContent}>
                    <p className={styles.heroText}>
                        El clan de los que aman la cerveza artesanal
                    </p>
                    <button
                        className={styles.button}
                        onClick={openModal}
                    >
                        sos parte de el clan?
                    </button>
                </div>
            </div>
        </section >
    );
};

export default Hero;