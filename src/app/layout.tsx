import { Saira } from 'next/font/google'
import { Footer, Header } from '@/modules'
import type { Metadata } from 'next'
import type { ComponentWithChildren } from '@/shared/types'

import '@/styles/global.css'

const inter = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'A Record Store',
    template: '%s - A Record Store',
  },
  description: 'A fully functional record store shop web application',
}

export default function RootLayout({ children }: ComponentWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
