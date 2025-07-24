import type { Metadata } from "next";
import { Grenze } from 'next/font/google';
import "@/styles/globals.css";

const grenze = Grenze({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-grenze',
});

export const metadata: Metadata = {
  title: "Cervezas El Clan",
  description: "Cerveza Artesanal de calidad para tus encuentros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${grenze.variable}`}>
        {children}
      </body>
    </html>
  );
}
