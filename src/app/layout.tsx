import './globals.css'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'

const roboto = Roboto({ 
  weight: ['400', '700'], 
  style: 'normal',
  subsets: ['latin']
})
 
export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'a11y App'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className && 'bg-gray-950'}>{children}</body>
    </html>
  )
}
