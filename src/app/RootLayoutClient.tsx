'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import OrderModal from '@/components/ui/OrderModal';
import { OrderModalProvider, useOrderModal } from '@/contexts/OrderModalContext';

type RootLayoutClientProps = {
    children: React.ReactNode;
};

function RootLayoutContent({ children }: RootLayoutClientProps) {
    const { isOpen, openModal, closeModal } = useOrderModal();

    return (
        <>
            <Header onCTAClick={openModal} />
            <main>
                {children}
            </main>
            <Footer />
            <WhatsAppButton />

            {/* Order Modal - Centralized */}
            <OrderModal
                isOpen={isOpen}
                onClose={closeModal}
            />
        </>
    );
}

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
    return (
        <OrderModalProvider>
            <RootLayoutContent>{children}</RootLayoutContent>
        </OrderModalProvider>
    );
}