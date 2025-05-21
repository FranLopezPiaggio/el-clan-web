"use client"
import { ProductCard } from './ProductCard';
import { useCatalog } from '@/features/catalog/useCatalog';
import { useEffect, useState, useRef } from 'react';
import '@/styles/catalog.css';

export function Catalog({ onAddToCart }: { onAddToCart: (p: any) => void }) {
    const { products, loading } = useCatalog();
    const [showLoader, setShowLoader] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const catalogRef = useRef<HTMLDivElement>(null);
    const cardsPerPage = 5; // Número de tarjetas visibles a la vez

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const scrollToNext = () => {
        if (catalogRef.current) {
            const scrollAmount = catalogRef.current.offsetWidth;
            catalogRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            
            // Actualizar el índice actual basado en grupos de 5 tarjetas
            const nextGroupIndex = Math.min(
                Math.floor((currentIndex + cardsPerPage) / cardsPerPage) * cardsPerPage,
                Math.max(0, products.length - cardsPerPage)
            );
            
            setCurrentIndex(nextGroupIndex);
        }
    };

    const scrollToPrev = () => {
        if (catalogRef.current) {
            const scrollAmount = catalogRef.current.offsetWidth;
            catalogRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            
            // Actualizar el índice actual basado en grupos de 5 tarjetas
            const prevGroupIndex = Math.max(
                Math.floor((currentIndex - cardsPerPage) / cardsPerPage) * cardsPerPage,
                0
            );
            
            setCurrentIndex(prevGroupIndex);
        }
    };

    const scrollToIndex = (index: number) => {
        if (catalogRef.current) {
            // Calcular la posición de desplazamiento basada en el ancho total del contenedor
            const containerWidth = catalogRef.current.offsetWidth;
            const groupIndex = Math.floor(index / cardsPerPage);
            const scrollPosition = groupIndex * containerWidth;
            
            catalogRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
            setCurrentIndex(index);
        }
    };

    if (loading || showLoader) {
        return (
            <div className="relative h-screen w-full">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/video/beer.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
                    Cargando catálogo...
                </div>
            </div>
        );
    }

    // Calcular el número de grupos de tarjetas (para los indicadores)
    const groupCount = Math.ceil(products.length / cardsPerPage);
    const groups = Array.from({ length: groupCount }, (_, i) => i);

    return (
        <div id="catalog" className="catalog-slider">
            <div className="catalog-nav">
                <button className="catalog-prev" onClick={scrollToPrev}>
                    &#10094;
                </button>
                <button className="catalog-next" onClick={scrollToNext}>
                    &#10095;
                </button>
            </div>
            
            <div className="catalog" ref={catalogRef}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </div>
            
            <div className="catalog-indicators">
                {groups.map((groupIndex) => (
                    <div 
                        key={groupIndex}
                        className={`catalog-indicator ${Math.floor(currentIndex / cardsPerPage) === groupIndex ? 'active' : ''}`}
                        onClick={() => scrollToIndex(groupIndex * cardsPerPage)}
                    />
                ))}
            </div>
        </div>
    );
}

