import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-display"
})

export const metadata: Metadata = {
  title: 'PythonX Trading | Premium MT5 Expert Advisors',
  description: 'Professional algorithmic trading solutions for MetaTrader 5. Premium Expert Advisors for XAUUSD, GBPUSD, EURUSD, and major indices.',
  keywords: ['MT5', 'Expert Advisor', 'Forex', 'Trading', 'XAUUSD', 'Gold', 'Scalping', 'Algo Trading'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
