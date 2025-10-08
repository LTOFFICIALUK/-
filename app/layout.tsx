import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from './components/CustomCursor'

export const metadata: Metadata = {
  title: '$苹果链 | Apple Chain - The Alpha Chain',
  description: 'Solana is the Apple Chain, the Alpha Chain. Built on the fastest, most reliable blockchain.',
  keywords: 'solana, apple chain, memecoin, blockchain, cryptocurrency',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
