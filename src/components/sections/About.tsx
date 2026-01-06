import styles from '@/styles/About.module.css';

const About = () => {
    return (
        <section className={styles.aboutSection} id="nosotros">
            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutTitle}>nuestra historia</h2>
                <p className={styles.aboutText}>El clan es mucho mas que una cerveza artesanal, es el resultado de la hermandad de 4 hermanos que decidimos transformar nuestra conexion en algo que se pudiera brindar, compartir, disfrutar.</p>
                <p className={styles.aboutText}>Cada botella de El Clan contiene mas que lupulo y cebada, refleja nuestras raices, nuestras risas, nuestros desacuerdos y, sobre todo, nuestro compromiso con la calidad y autenticidad.</p>
                <p className={styles.aboutText}>Elaboramos cerveza artesanal en lotes pequeños cuidando cada detalle y dejando que cada estilo cuente una parte de nuestra historia.</p>
                <p className={styles.aboutText}>En El Clan, creemos que las mejores cosas se hacen en familia...y si es con una buena birra, mucho mejor.</p>
            </div>
        </section>
    );
};

export default About;
