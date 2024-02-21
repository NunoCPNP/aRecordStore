import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Saira } from 'next/font/google'
import { Footer, Header } from '@/modules'

import styles from './layout.module.css'
import '@/styles/global.css'

const inter = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A Record Store',
  description: 'A fully functional record store shop web application',
}

type RootLayoutTypes = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutTypes) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
