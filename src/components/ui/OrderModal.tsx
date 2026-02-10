"use client";

import { useState } from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/data/products';
import { Product } from '@/types/products';

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface OrderItem {
    product: Product;
    quantity: number;
}

const OrderModal = ({ isOpen, onClose }: OrderModalProps) => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });

    const [quantities, setQuantities] = useState<Record<number, number>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const adjustQuantity = (productId: number, delta: number) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: Math.max(0, (prev[productId] || 0) + delta)
        }));
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const getOrderItems = (): OrderItem[] => {
        return MOCK_PRODUCTS.filter(product => quantities[product.id] > 0)
            .map(product => ({
                product,
                quantity: quantities[product.id]
            }));
    };

    const getTotalPrice = () => {
        return getOrderItems().reduce((total, item) => {
            return total + (item.product.price || 0) * item.quantity;
        }, 0);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const orderItems = getOrderItems();

        if (orderItems.length === 0) {
            alert('Por favor selecciona al menos un producto');
            return;
        }

        console.log('Pedido:', {
            cliente: formData,
            productos: orderItems,
            total: getTotalPrice()
        });

        // Aquí puedes agregar la lógica para enviar el pedido
        alert('¡Pedido enviado con éxito!');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-deep-black border border-patagonia-gold/30 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-deep-black border-b border-patagonia-gold/30">
                    <h2 className="text-2xl font-bold text-patagonia-gold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                        Realizar Pedido
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-pure-white/60 hover:text-patagonia-gold transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
                    <form onSubmit={handleSubmit} className="p-6 space-y-8">
                        {/* Customer Information */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-pure-white mb-4">
                                Información de Contacto
                            </h3>

                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-pure-white/80 mb-2">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-pure-white placeholder-pure-white/40 focus:outline-none focus:border-patagonia-gold/50 transition-colors"
                                    placeholder="Juan Pérez"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-pure-white/80 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-pure-white placeholder-pure-white/40 focus:outline-none focus:border-patagonia-gold/50 transition-colors"
                                    placeholder="juan@ejemplo.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="telefono" className="block text-sm font-medium text-pure-white/80 mb-2">
                                    Número de Teléfono
                                </label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-pure-white placeholder-pure-white/40 focus:outline-none focus:border-patagonia-gold/50 transition-colors"
                                    placeholder="+56 9 1234 5678"
                                />
                            </div>
                        </div>

                        {/* Product Catalog */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-pure-white mb-4">
                                Selecciona tus Productos
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {MOCK_PRODUCTS.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-patagonia-gold/30 transition-colors"
                                    >
                                        {/* Product Image */}
                                        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-pure-white truncate" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                                {product.name}
                                            </h4>
                                            <p className="text-xs text-muted-gold mb-1">
                                                {product.type}
                                            </p>
                                            <p className="text-sm font-semibold text-patagonia-gold">
                                                {formatPrice(product.price || 0)}
                                            </p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => adjustQuantity(product.id, -1)}
                                                    className="w-7 h-7 flex items-center justify-center rounded border border-white/20 text-pure-white/60 hover:border-patagonia-gold hover:text-patagonia-gold transition-colors"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="w-8 text-center text-sm font-medium text-pure-white">
                                                    {quantities[product.id] || 0}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => adjustQuantity(product.id, 1)}
                                                    className="w-7 h-7 flex items-center justify-center rounded border border-white/20 text-pure-white/60 hover:border-patagonia-gold hover:text-patagonia-gold transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        {getOrderItems().length > 0 && (
                            <div className="p-4 bg-patagonia-gold/10 border border-patagonia-gold/30 rounded-lg">
                                <h4 className="text-sm font-semibold text-pure-white mb-3">
                                    Resumen del Pedido
                                </h4>
                                <div className="space-y-2 mb-3">
                                    {getOrderItems().map(item => (
                                        <div key={item.product.id} className="flex justify-between text-sm text-pure-white/80">
                                            <span>{item.product.name} x {item.quantity}</span>
                                            <span>{formatPrice((item.product.price || 0) * item.quantity)}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-3 border-t border-patagonia-gold/30 flex justify-between text-lg font-bold">
                                    <span className="text-pure-white">Total</span>
                                    <span className="text-patagonia-gold">{formatPrice(getTotalPrice())}</span>
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-patagonia-gold text-deep-black font-semibold rounded-lg hover:bg-pure-white transition-colors duration-300"
                        >
                            <ShoppingCart size={20} />
                            <span>Confirmar Pedido</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
