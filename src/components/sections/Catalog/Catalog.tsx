// components/Catalog/Catalog.tsx
'use client';
import React, { useState } from 'react';
import styles from '@/styles/Catalog.module.css';

import ElClanIpa from '@/assets/img/el-clan-ipa.webp';
import ElClandDorada from '@/assets/img/el-clan-dorada.webp';
import ElClanRed from '@/assets/img/el-clan-red.webp';
import ElClanpampeana from '@/assets/img/el-clan-pampeana.webp';

interface Beer {
  id: number;
  name: string;
  description: string;
  image: string;
  category: 'lager' | 'ale';
}

interface CatalogProps {
  beers?: Beer[];
}

const defaultBeers: Beer[] = [
      {
        id: 1,
        name: "La IPA",
        description: "Cerveza Ale de intenso aroma y sabor a lúpulo, con notas cítricas y frutales.",
        image: ElClanIpa.src,
        category: 'ale'
      },
      {
        id: 2,
        name: "APA",
        description: "American Pale Ale, refrescante y balanceada, con presencia de lúpulos americanos.",
        image: ElClanpampeana.src,
        category: 'ale'
      },
      {
        id: 3,
        name: "Pampeana",
        description: "Ale rubia, suave y fácil de tomar, con notas maltosas y final seco.",
        image: ElClanpampeana.src,
        category: 'ale'
      },
      {
        id: 4,
        name: "Red",
        description: "Cerveza Ale roja, con cuerpo medio y notas a caramelo y leve tostado.",
        image: ElClanRed.src,
        category: 'ale'
      },
      {
        id: 5,
        name: "Dorada",
        description: "Lager dorada, ligera y refrescante, ideal para cualquier ocasión.",
        image: ElClandDorada.src,
        category: 'lager' 
      }
];

const Catalog: React.FC<CatalogProps> = ({ beers = defaultBeers }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'lager' | 'ale'>('all');

  const filteredBeers = activeFilter === 'all' 
    ? beers 
    : beers.filter(beer => beer.category === activeFilter);

  return (
    <section id="catalog" className={styles.catalog}>
      <div className="container">
        <h2 className={styles.title}>Our Beers</h2>
        
        <div className={styles.filterContainer}>
          <div className={styles.filterTabs}>
            <button
              className={`${styles.filterTab} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              className={`${styles.filterTab} ${activeFilter === 'lager' ? styles.active : ''}`}
              onClick={() => setActiveFilter('lager')}
            >
              Lager
            </button>
            <button
              className={`${styles.filterTab} ${activeFilter === 'ale' ? styles.active : ''}`}
              onClick={() => setActiveFilter('ale')}
            >
              Ale
            </button>
          </div>
        </div>
        
        <div className={styles.beerGrid}>
          {filteredBeers.map(beer => (
            <div key={beer.id} className={styles.beerCard}>
              <div 
                className={styles.beerImage}
                style={{ backgroundImage: `url("${beer.image}")` }}
              />
              <div className={styles.beerInfo}>
                <p className={styles.beerName}>{beer.name}</p>
                <p className={styles.beerDescription}>{beer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;