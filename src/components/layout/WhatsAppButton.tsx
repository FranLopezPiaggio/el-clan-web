import whatsappIcon from '@/assets/svg/whatsapp-svgrepo-com.svg';
import Image from 'next/image';
import styles from '@/styles/WhatsAppButton.module.css'

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5491112345678" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
            aria-label="Chat on WhatsApp"
        >
            <Image
                src={whatsappIcon}
                alt="WhatsApp"
                width={60}
                height={60}
                className={styles.whatsappIcon}
            />
        </a>
    );
};

export default WhatsAppButton;
