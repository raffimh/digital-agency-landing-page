import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IORAF - Web Development Agency',
  description: 'Professional web development services for modern businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isServer = typeof window === 'undefined';
  const htmlClassName = isServer ? 'scroll-smooth light' : 'scroll-smooth';
  const htmlStyle = isServer ? { colorScheme: 'light' } : {};

  return (
    <html lang="en" className={htmlClassName} style={htmlStyle}>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="flex min-h-screen flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}