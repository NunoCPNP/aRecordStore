import { Box, GoBack } from '@/components'

import type { ComponentWithChildren } from '@/shared/types'

const Layout = async ({ children }: ComponentWithChildren) => {
  return (
    <>
      <Box pt={2.5} pb={2.2}>
        <GoBack />
      </Box>
      {children}
    </>
  )
}

export default Layout
