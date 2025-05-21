"use client"
import React from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import { Catalog } from '@/components/catalog/Catalog'
import History from '@/components/ui/OurHistory'
import { Cart } from '@/components/orders/Cart'

import { useCart } from '@/features/cart/useCart'


function Page() {
    
    const { add } = useCart()

    return (
        <div>
            <Header/>
            <Cart />
            <main>
                <Hero/>
                <Catalog onAddToCart= {add}/>
                <History/>
            </main>
            <Footer/>
        </div>
    )
}

export default Page