// components/Catalog/Catalog.tsx
'use client';
import React, { useState } from 'react';
import styles from '@/styles/Catalog.module.css';

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
    name: "Golden Lager",
    description: "Crisp and refreshing with a hint of malt.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM1HCWIzthc_QOWZ1v8-qhYYmK3u0t67Wx4oDh9LQL8n5THb-SAPoZr9VKL_b1FN1MQYCzyEZnfp6umM20wRMFx06h3TSPHTpfkNrJ5zFnS0sW4lR5htKkSSsbjAwrtk52QNvtVwyBW5L4HPutVFfVKB4nFTcwb4Vcz8dQa56wMVFK4mea_pSp5ogvKdR5OMKv-2oKH4gpsYVcodyOHzUK3Egyex_YEwuA4udw4JHqukPEGcX8EEkKwaOun6_aDADaPIUc-eBhAWo",
    category: 'lager'
  },
  {
    id: 2,
    name: "Amber Ale",
    description: "Balanced and smooth with caramel notes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb_zyKDBcIwDU6AQkdqa6FUe9r0BUOCJ9DIgMJ9hAiYJsm6Vxy6uvgKvnAUlUG6MeJxKTbjENkfWoGi8UEhQ7LNV9tUF5fAi0y4ntKh35rlP4z0uhOKAxe4eHmDDTGY4qssPpOUNVmAhzIE6WdFfMdYsIWSUAWeUvHSErQL9wPxXhxP8-Dd29xIy9R66O2yJ9wkUwEKthezLVmudcTfzVw-CC6K43ncXOKGu7HOGDnx5IZiUW41PA-mMKgMTdtIZOfomrGtRgcMbs",
    category: 'ale'
  },
  {
    id: 3,
    name: "Dark Stout",
    description: "Rich and robust with chocolate and coffee flavors.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpMzmRFYxtgiP175_ySvKVnklSOP0iA5PTYhDNcdo3SvXeeC5OhLc7gL9PB29f4dO15Ncsr32p8PiPb8utPSdKrLmD3lyPjm-Yy6unv_ef2B7NuO62zSVX9lTKqX_AlUyE4TYN3JMYTZ8ba8oTsS_ZprSxsuh-eKXSnXVxn9nw4AEJBvD8yU_xoNLTNjzDZ_pXHRIUwfnRp5gPm9PPOESXNeezWdmYSH-PY45OdUYJnSnd6FfbraxGbaWdG_ZWedDqya7pVGRGm_8",
    category: 'ale'
  }
];

const Catalog: React.FC<CatalogProps> = ({ beers = defaultBeers }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'lager' | 'ale'>('all');

  const filteredBeers = activeFilter === 'all' 
    ? beers 
    : beers.filter(beer => beer.category === activeFilter);

  return (
    <section className={styles.catalog}>
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
            Lagers
          </button>
          <button
            className={`${styles.filterTab} ${activeFilter === 'ale' ? styles.active : ''}`}
            onClick={() => setActiveFilter('ale')}
          >
            Ales
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
    </section>
  );
};

export default Catalog;