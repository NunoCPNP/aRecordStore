import { Box, GoBack } from '@/components'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'London Calling',
  description: 'Record Shop web application for demonstration purposes only',
}

type RootLayoutTypes = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutTypes) {
  return (
    <>
      <Box pt={2.5} pb={2.2}>
        <GoBack />
      </Box>
      {children}
    </>
  )
}
