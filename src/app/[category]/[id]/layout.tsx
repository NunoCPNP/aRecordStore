import { Box, GoBack } from '@/components'

import type { ComponentWithChildren } from '@/shared/types'

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
