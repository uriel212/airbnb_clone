import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import NavBar from './components/navbar/NavBar'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
