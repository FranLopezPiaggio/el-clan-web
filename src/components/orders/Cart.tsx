"use client"
import React from 'react';
import { useCart, CartItem } from '@/hooks/cart/useCart';
import Image from 'next/image';
import '@/styles/cart.css';

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Cart({ isOpen, onClose }: CartProps) {
  const { cart, remove, removeOne, add, clear, totalPrice } = useCart();

  return (
    <div className={`cart-container fixed top-0 right-0 h-screen bg-white shadow-lg p-4 z-20 transition-all ${isOpen ? 'w-80' : 'w-0 opacity-0'}`}>
      {isOpen && (
        <>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          
          <h2 className="text-xl font-bold mb-4 mt-10">Tu Carrito</h2>
          
          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <>
              <ul className="space-y-4">
                {cart.map((item: CartItem) => (
                  <li key={item.id} className="flex items-center border-b pb-2">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      width={50} 
                      height={50}
                      className="mr-2"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm">${item.price} x {item.qty}</p>
                    </div>
                    <div className="flex items-center">
                      <button 
                        onClick={() => removeOne(item.id)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.qty}</span>
                      <button 
                        onClick={() => add(item)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => remove(item.id)}
                        className="ml-2 text-red-500"
                      >
                        🗑️
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 border-t pt-4">
                <p className="font-bold">Total: ${totalPrice}</p>
                <button 
                  onClick={() => alert('¡Compra finalizada! Total: $' + totalPrice)}
                  className="w-full bg-green-600 text-white py-2 rounded mt-2"
                >
                  Finalizar Compra
                </button>
                <button 
                  onClick={clear}
                  className="w-full bg-red-600 text-white py-2 rounded mt-2"
                >
                  Vaciar Carrito
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}