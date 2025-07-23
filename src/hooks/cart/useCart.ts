import { useEffect, useState } from 'react'
import Product  from '@/types/products'

export type CartItem = Product & { qty: number }

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if (stored) setCart(JSON.parse(stored))
  }, [])

  // Actualizar localStorage cada vez que cambia el carrito
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Agregar producto (o sumar cantidad)
  const add = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id)
      if (existing) {
        return prev.map(p =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  // Quitar 1 unidad de un producto
  const removeOne = (id: number) => {
    setCart(prev =>
      prev
        .map(p => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter(p => p.qty > 0)
    )
  }

  // Eliminar producto del carrito
  const remove = (id: number) => {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  // Vaciar todo el carrito
  const clear = () => {
    setCart([])
    localStorage.removeItem('cart')
  }

  const totalQty = cart.reduce((acc, p) => acc + p.qty, 0)
  const totalPrice = cart.reduce((acc, p) => acc + p.price * p.qty, 0)

  return { cart, add, remove, removeOne, clear, totalQty, totalPrice }
}
