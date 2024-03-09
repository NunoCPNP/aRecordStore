import { Saira } from 'next/font/google'
import { Providers } from '@/Context'
import { Footer, Header } from '@/modules'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import type { Metadata } from 'next'
import type { ComponentWithChildren } from '@/shared/types'

import '@/styles/global.scss'

const inter = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'The Record Store',
    template: '%s - The Record Store',
  },
  description: 'The record store web application',
}

const RootLayout = ({ children }: ComponentWithChildren) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
