"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Product from '@/types/products';

type Props = {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart}: Props) {
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = () => {
        setIsAdding(true);
        
        // Llamar a la función onAddToCart
        onAddToCart(product);
        
        // Mostrar efecto visual por un momento
        setTimeout(() => {
            setIsAdding(false);
        }, 300);
        
        console.log('Producto agregado:', product);
    };

    return (
        <div className="product-card">
            <Image 
            src={product.image} 
            alt={product.name} 
            width={200}
            height={200}
            className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-size">{product.size}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            <div className="flex justify-between text-sm mb-2">
                <p className="product-IBU">IBU: {product.IBU}</p>
                <p className="product-ABV">ABV: {product.ABV}%</p>
            </div>
            {product.inStock ? (
                <button
                onClick={handleAddToCart}
                className={`product-add-to-cart ${isAdding ? 'bg-green-600' : ''}`}
                disabled={isAdding}
                >
                    {isAdding ? '✓ Agregado' : 'Agregar al Carrito'}
                </button>
            ) : (
                <span className="product-out-of-stock">Agotado</span>
            )}
        </div>
    )
}