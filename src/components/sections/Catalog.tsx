'use client';

import { useState } from 'react';
import styles from '@/styles/Catalog.module.css';
import ProductCard, { Product } from '@/components/ui/ProductCard';
import Image from 'next/image';
import LogoNegroDorado from '@/assets/img/el-clan-logo-negro-dorado.jpg';

// Datos de ejemplo - reemplaza con tus datos reales
const SAMPLE_PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'El Clan IPA',
        description: 'Una IPA con notas cítricas y amargor equilibrado',
        type: 'IPA',
        abv: 6.5,
        ibu: 65,
        image: '/images/beer-placeholder.jpg',
        price: 450
    },
    {
        id: 2,
        name: 'Lager Artesanal',
        description: 'Cerveza rubia suave y refrescante',
        type: 'Lager',
        abv: 4.8,
        ibu: 25,
        image: '/images/beer-placeholder.jpg',
        price: 400
    },
    {
        id: 3,
        name: 'Stout Imperial',
        description: 'Cerveza negra con notas de café y chocolate',
        type: 'Stout',
        abv: 8.2,
        ibu: 45,
        image: '/images/beer-placeholder.jpg',
        price: 550
    },
    // Agrega más productos según necesites
];

const BEER_TYPES = ['Todas', 'IPA', 'Lager', 'Stout', 'Pale Ale', 'Porter'];

const Catalog = () => {
    const [selectedType, setSelectedType] = useState<string>('Todas');
    const [abvRange, setAbvRange] = useState<[number, number]>([0, 15]);

    // Filtrar productos
    const filteredProducts = SAMPLE_PRODUCTS.filter(product => {
        const typeMatch = selectedType === 'Todas' || product.type === selectedType;
        const abvMatch = product.abv >= abvRange[0] && product.abv <= abvRange[1];
        return typeMatch && abvMatch;
    });

    return (
        <div id="cervezas" className={styles.catalogSection}>
            <div className={styles.catalogContainer}>
                <Image className={styles.logoNegroDorado} src={LogoNegroDorado} alt="Beer" width={100} />

                <div className={styles.catalogLayout}>
                    {/* Sidebar de Filtros */}
                    <aside className={styles.filterSidebar}>
                        <div className={styles.filterGroup}>
                            <h3 className={styles.filterTitle}>Tipo de Cerveza</h3>
                            <div className={styles.filterOptions}>
                                {BEER_TYPES.map(type => (
                                    <button
                                        key={type}
                                        className={`${styles.filterButton} ${selectedType === type ? styles.active : ''
                                            }`}
                                        onClick={() => setSelectedType(type)}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.filterGroup}>
                            <h3 className={styles.filterTitle}>
                                Graduación Alcohólica (ABV)
                            </h3>
                            <div className={styles.rangeContainer}>
                                <input
                                    type="range"
                                    min="0"
                                    max="15"
                                    step="0.5"
                                    value={abvRange[1]}
                                    onChange={(e) => setAbvRange([0, parseFloat(e.target.value)])}
                                    className={styles.rangeSlider}
                                />
                                <div className={styles.rangeLabels}>
                                    <span>0%</span>
                                    <span>{abvRange[1]}%</span>
                                </div>
                            </div>
                        </div>

                        <button
                            className={styles.resetButton}
                            onClick={() => {
                                setSelectedType('Todas');
                                setAbvRange([0, 15]);
                            }}
                        >
                            Limpiar Filtros
                        </button>
                    </aside>

                    {/* Grid de Productos */}
                    <div className={styles.productsContainer}>
                        <div className={styles.productsHeader}>
                            <p className={styles.resultsCount}>
                                {filteredProducts.length} {filteredProducts.length === 1 ? 'cerveza' : 'cervezas'}
                            </p>
                        </div>

                        <div className={styles.productsGrid}>
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className={styles.noResults}>
                                <p>No se encontraron cervezas con los filtros seleccionados</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
