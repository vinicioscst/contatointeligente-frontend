import type { Metadata } from 'next'
import { Inter, Abril_Fatface } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
export const abrilFatface = Abril_Fatface({ subsets: ['latin'], weight: ['400'] })

const metadata: Metadata = {
  title: 'Contato Inteligente',
  description: 'Todos os seus contatos organizados em um único lugar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
