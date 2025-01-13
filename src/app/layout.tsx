import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

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
        <Script id="zoho-salesiq-init" strategy="afterInteractive">
          {`
            window.$zoho=window.$zoho || {};
            $zoho.salesiq=$zoho.salesiq || {ready:function(){}};
          `}
        </Script>
        <Script
          id="zoho-salesiq-script"
          src="https://salesiq.zohopublic.com/widget?wc=siq8700f0187da5bf7db81c2d216140dd315b102243873dab939f9151d94fa8936b"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}
