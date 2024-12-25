import '@/styles/globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';

import Header from '@/components/Header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Coinquest',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} grid max-h-screen grid-rows-layout antialiased`}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
