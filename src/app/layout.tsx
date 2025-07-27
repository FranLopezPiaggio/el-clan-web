import type { Metadata } from "next";
import { Grenze } from 'next/font/google';
import "../globals.css";

const grenze = Grenze({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-grenze',
});

export const metadata: Metadata = {
  title: "El Clan - Cerveza Artesanal",
  description: "Cerveza artesanal de calidad para tus encuentros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`antialiased ${grenze.variable}`}>
        {children}
      </body>
    </html>
  );
}

