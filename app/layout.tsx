import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './components/navbar';
import Footer from './components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gaige\'s Portfolio',
  description: 'The personal portfolio of Gaige McMichael, Antwerp Ohio.',
  keywords: ['portfolio', 'developer', 'designer', 'engineer'],
  authors: [{ name: 'Gaige McMichael' }],
  openGraph: {
    title: 'Gaige\'s Portfolio',
    description: 'Professional portfolio showcasing my work and skills',
    url: 'https://personal-portfolio-gaigemc.vercel.app/',
    siteName: 'Gaige\'s Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-black-primary">
        <NavBar/>
        <main className="px-2 md:px-8 mt-5 md:mt-8 pb-8 dark:bg-black-primary">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
