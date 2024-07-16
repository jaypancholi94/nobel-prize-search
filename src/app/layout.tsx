import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NobelPrizeProvider } from '@/context/nobel-prize-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nobel Prize Explorer',
  description:
    'Explore Nobel Prize winners and their achievements with our comprehensive search tool. Discover laureates in Physics, Chemistry, Medicine, Literature, Peace, and Economic Sciences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NobelPrizeProvider>{children}</NobelPrizeProvider>
      </body>
    </html>
  );
}
