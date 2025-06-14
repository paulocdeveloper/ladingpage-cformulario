import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SuaMarca - Transforme Sua Presença Digital",
  description:
    "Criamos soluções digitais inovadoras que impulsionam seu negócio para o próximo nível. Design moderno, performance excepcional e resultados garantidos.",
  keywords: "desenvolvimento web, design digital, marketing digital, presença online",
  authors: [{ name: "SuaMarca" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "SuaMarca - Transforme Sua Presença Digital",
    description: "Criamos soluções digitais inovadoras que impulsionam seu negócio para o próximo nível.",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
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
