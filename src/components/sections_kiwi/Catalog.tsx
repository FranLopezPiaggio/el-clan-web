"use client";

import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Star } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/data/products';
import Image from 'next/image';
import LogoNegroDorado from '@/assets/img/el-clan-logo-negro-dorado.jpg';

const Catalogo = () => {
    const [cantidades, setCantidades] = useState<Record<number, number>>({});

    const ajustarCantidad = (id: number, delta: number) => {
        setCantidades((prev) => ({
            ...prev,
            [id]: Math.max(0, (prev[id] || 0) + delta),
        }));
    };

    const formatPrecio = (precio: number) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
        }).format(precio);
    };

    return (
        <section id="catalogo" className="py-20 sm:py-28 lg:py-32 bg-deep-black">
            <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Image
                        src={LogoNegroDorado}
                        alt="Logo El Clan"
                        width={300}
                        className="mask-logo"
                        style={{
                            maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
                        }}
                    />
                </div>

                {/* Section Header */}
                <div className="max-w-3xl mb-16 mx-auto text-center">
                    <span className="inline-block text-sm font-medium text-muted-gold tracking-widest uppercase mb-4">
                        Nuestras Cervezas
                    </span>
                    <p className="text-base sm:text-lg text-pure-white/60 leading-relaxed mx-auto">
                        Cada cerveza es el resultado de un proceso artesanal cuidadosamente
                        controlado. Desde la selección de maltas hasta el embotellado,
                        todo se hace con pasión y precisión.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {MOCK_PRODUCTS.map((producto) => (
                        <div
                            key={producto.id}
                            className="group relative bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-patagonia-gold/50 transition-all duration-300"
                        >


                            {/* Image */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img
                                    src={producto.image}
                                    alt={producto.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                {/* Style Tag */}
                                <span className="inline-block text-xs font-medium text-muted-gold tracking-wider uppercase mb-2">
                                    {producto.type}
                                </span>

                                {/* Name */}
                                <h3 className="text-xl font-bold text-pure-white mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    {producto.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-pure-white/60 mb-4 line-clamp-2">
                                    {producto.description}
                                </p>

                                {/* Specs */}
                                <div className="flex items-center gap-4 mb-4 text-xs text-pure-white/50">
                                    <span className="flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-patagonia-gold rounded-full" />
                                        IBU: {producto.ibu}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-patagonia-gold rounded-full" />
                                        ABV: {producto.abv}%
                                    </span>
                                </div>

                                {/* Price & Actions */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <div className="text-lg font-bold text-patagonia-gold">
                                        {formatPrecio(producto.price || 0)}
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => ajustarCantidad(producto.id, -1)}
                                            className="w-8 h-8 flex items-center justify-center rounded border border-white/20 text-pure-white/60 hover:border-patagonia-gold hover:text-patagonia-gold transition-colors"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="w-6 text-center text-sm font-medium text-pure-white">
                                            {cantidades[producto.id] || 0}
                                        </span>
                                        <button
                                            onClick={() => ajustarCantidad(producto.id, 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded border border-white/20 text-pure-white/60 hover:border-patagonia-gold hover:text-patagonia-gold transition-colors"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>

                                {/* Add to Cart Button */}
                                <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-patagonia-gold text-deep-black font-semibold rounded hover:bg-pure-white transition-colors duration-300">
                                    <ShoppingCart size={18} />
                                    <span>Agregar al Carro</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 px-8 py-4 border border-patagonia-gold text-patagonia-gold font-medium rounded hover:bg-patagonia-gold hover:text-deep-black transition-all duration-300">
                        <span>Ver Toda la Colección</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Catalogo;
