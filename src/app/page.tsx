"use client"
import React, { useState } from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import History from '@/components/ui/OurHistory'
import { Cart } from '@/components/orders/Cart'
import Catalog from '@/components/catalog/Catalog'

import { useCart } from '@/hooks/cart/useCart'

function Page() {
    const { add } = useCart()
    const [isCartOpen, setIsCartOpen] = useState(false)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div>
            <Header onCartButtonClick={toggleCart}/>
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <main>
                <Hero/>
                <Catalog/>
                <History/>
            </main>
            <Footer/>
        </div>
    )
}

export default Page