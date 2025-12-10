'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from "@/components/layout/WhatsAppButton";

type RootLayoutClientProps = {
    children: React.ReactNode;
};

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOrderModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsOrderModalOpen(false);
    };

    return (
        <>
            <Header onCTAClick={handleOpenModal} />
            <main>
                {children}
            </main>
            <Footer />
            <WhatsAppButton />

            {/* Placeholder del modal */}
            {/* Luego lo reemplazás por tu componente real */}
            {isOrderModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        color: 'white',
                    }}
                    onClick={handleCloseModal}
                >
                    <div
                        style={{ background: '#111', padding: '2rem', borderRadius: '12px' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>Hace tu pedido</h2>
                        <p>Acá va el contenido del modal...</p>
                        <button onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </>
    );
}