'use client';

import { useState, useMemo } from 'react';
import styles from '@/styles/Catalog.module.css';
import ProductCard from '@/components/ui/ProductCard';
import Image from 'next/image';
import LogoNegroDorado from '@/assets/img/el-clan-logo-negro-dorado.jpg';
import { MOCK_PRODUCTS } from '@/data/products';
import { Product } from '@/types/products';


const Catalog = () => {

    const availableProducts = useMemo(
        () => MOCK_PRODUCTS.filter(product => product.inStock),
        []
    );


    return (
        <div id="cervezas" className={styles.catalogSection}>
            <div className={styles.catalogContainer}>
                <Image className={styles.logoContainer} src={LogoNegroDorado} alt="Logo El Clan" width={300} priority />

                <div className={styles.catalogContent}>
                    <h2 className={styles.catalogTitle}>nuestras cervezas</h2>
                    <div className={styles.catalogFrame}>
                        <div className={styles.catalogFrameContent}>
                            {availableProducts.length === 0 ? (
                                <p className={styles.emptyState}>
                                    No hay productos disponibles en este momento
                                </p>
                            ) : (
                                <div className={styles.productsGrid}>
                                    {availableProducts.map((product: Product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
