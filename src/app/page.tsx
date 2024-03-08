import { Box } from '@/components'
import { Suspense } from 'react'
import { ProductListing, Pagination, ProductFilters } from '@/modules'

import type { PageTypes } from './page.types'

const Page = ({ searchParams }: PageTypes) => (
  <>
    <Box pt={3.4}>
      <ProductFilters />
    </Box>
    <Box pt={2.4}>
      <Pagination />
    </Box>
    <Box pt={3.2} as="section">
      <Suspense key={searchParams.page || searchParams.filter} fallback={<div>Loading !!!</div>}>
        <ProductListing searchParams={searchParams} />
      </Suspense>
    </Box>
    <Box pt={7.4}>
      <Pagination />
    </Box>
  </>
)

export default Page
