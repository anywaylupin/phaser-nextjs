import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Phaser Vercel Boilerplate',
  description:
    'A Custom Phaser 3 Next.js project template that demonstrates Next.js with React communication and uses Vercel for deploying.'
};

const RootLayout = ({ children }: Readonly<React.PropsWithChildren>) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
