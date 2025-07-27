// components/Story/Story.tsx
import React from 'react';
import styles from '@/styles/Story.module.css';

interface StoryProps {
  title?: string;
  subtitle?: string;
  content?: string;
  image?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Story: React.FC<StoryProps> = ({
  title = "Our Story",
  subtitle = "A Legacy of Brewing Excellence",
  content = "Brewery Co. was founded in 1995 with a passion for crafting high-quality beers. Our journey began with a small brewery and a commitment to using the finest ingredients and traditional brewing techniques. Today, we continue to innovate while honoring our heritage, creating beers that are enjoyed by enthusiasts around the world.",
  image = "https://lh3.googleusercontent.com/aida-public/AB6AXuCe_lU-YRhiZzDqZVWaQ7Ogmdr-FGrkdf8vF1RVTtjKlivdIRWFNarG9YsptF5L6Fw0HmTYnLIUKfY5iOgWc8AaYc5u3cEnixBVJBcpiKHbSNTA2A4W-heInIyzziAjLHWFSLf4FRy-UG1sjhxfaecen2z-rOXPK2HJMenylmM3A3FFocP_udJrryP6wG39pv2Tm7lCgsBjbmig6ot6RFUc9OUv6KVmCD05gwJ_g-sjpCpF292lKQ142W72hJzgykRbKmlggfXlCq0",
  ctaText = "Learn More",
  onCtaClick
}) => {
  return (
    <section className={styles.story}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      
      <div className={styles.storyContainer}>
        <div className={styles.contentWrapper}>
          <div 
            className={styles.storyImage}
            style={{ backgroundImage: `url("${image}")` }}
          />
          
          <div className={styles.storyContent}>
            <p className={styles.date}>Since 1995</p>
            <p className={styles.storyTitle}>{subtitle}</p>
            <div className={styles.storyText}>
              <p className={styles.description}>{content}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.ctaContainer}>
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

export default Story;