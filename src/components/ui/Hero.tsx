'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from '@/styles/Hero.module.css';

// Define media sources object
const mediaSources = {
  videos: [
    '/video/heroVideo.mp4',
    '/video/hops.mp4',
    '/video/hopsPlantation.mp4',
    //'/video/beer.mp4',
  ],
  // images: [
  //   '/image/beer&hops.jpg',
  //   '/image/heroBG.jpg',
  //   '/image/hops.jpg'
  // ]
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0);
  const [currentSource, setCurrentSource] = useState<string>(mediaSources.videos[0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  useEffect(() => {
    const switchBackground = () => {
      setCurrentMediaIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % mediaSources.videos.length;
        setCurrentSource(mediaSources.videos[nextIndex]);
        return nextIndex;
      });
    };

    const interval = setInterval(switchBackground, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  }, [currentSource]);

  return (
    <div ref={containerRef} className={styles.heroWrapper}>
      <motion.div 
        className={styles.videoContainer}
        style={{ y: videoY }}
      >
        <AnimatePresence mode="wait">
          <motion.video
            key={currentSource} // Use currentSource as the key to trigger re-render
            ref={videoRef}
            className={styles.backgroundVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={currentSource} type="video/mp4" />
            Your browser does not support video playback.
          </motion.video>
        </AnimatePresence>
      </motion.div>
      
      <div className={styles.overlay}></div>
      
      <motion.div 
        className={styles.heroContent}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1>Cerveza artesanal de calidad</h1>
          <p>Elaborada con pasión y los mejores ingredientes</p>
          <button className="btn-primary">Descubrir cervezas</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;