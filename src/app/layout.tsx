import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Assessment Screening Test',
  description:
    'This is an assessment screening test to replicate forcythe.com landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased lg:max-w-fit`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
