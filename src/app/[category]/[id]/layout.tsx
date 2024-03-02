import { Box, GoBack } from '@/components'
import type { Metadata } from 'next'
import type { ComponentWithChildren } from '@/shared/types'

export const metadata: Metadata = {
  title: 'London Calling',
  description: 'Record Shop web application for demonstration purposes only',
}

export default function RootLayout({ children }: ComponentWithChildren) {
  return (
    <>
      <Box pt={2.5} pb={2.2}>
        <GoBack />
      </Box>
      {children}
    </>
  )
}
