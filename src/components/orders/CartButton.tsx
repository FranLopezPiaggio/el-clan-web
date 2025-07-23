"use client"
import React from 'react';
import { useCart } from '@/hooks/cart/useCart';
import '@/styles/cart.css';

type CartButtonProps = {
  onClick: () => void;
};

export function CartButton({ onClick }: CartButtonProps) {
  const { totalQty } = useCart();

  return (
    <button 
      onClick={onClick}
      className="cart-button"
    >
      🛒 {totalQty > 0 && <span className="cart-count">{totalQty}</span>}
    </button>
  );
}