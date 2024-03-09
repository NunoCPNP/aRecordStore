import { Box } from '@/components'
import { Suspense } from 'react'
import { ProductListing, Pagination, ProductFilters, ProductListingSkeleton } from '@/modules'

import type { PageTypes } from './page.types'

const Page = ({ searchParams }: PageTypes) => {
  const key = searchParams.page || searchParams.filter

  return (
    <>
      <Box pt={3.4}>
        <ProductFilters />
      </Box>
      <Box pt={2.4}>
        <Pagination />
      </Box>
      <Box pt={3.2} as="section">
        <Suspense key={key} fallback={<ProductListingSkeleton />}>
          <ProductListing searchParams={searchParams} />
        </Suspense>
      </Box>
      <Box pt={7.4}>
        <Pagination />
      </Box>
    </>
  )
}

export default Page
