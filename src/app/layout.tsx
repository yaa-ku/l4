import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';
import { Header } from '@/components/header/header';
import 'src/styles/index.scss';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'l4',
  description: 'lab 4 for web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  )
}
