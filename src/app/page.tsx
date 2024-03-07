import { Box } from '@/components'
import { getRecords } from '@/shared/services'
import { ProductListing, Pagination, ProductFilters } from '@/modules'

import type { PageTypes, GetDataTypes } from './page.types'

async function getData({ searchParams }: GetDataTypes) {
  const itemsPerPage = 12

  return await getRecords({ searchParams, itemsPerPage })
}

const Page = async ({ searchParams }: PageTypes) => {
  const { products } = await getData({ searchParams })

  return (
    <>
      <Box pt={3.4}>
        <ProductFilters />
      </Box>
      <Box pt={2.4}>
        <Pagination />
      </Box>
      <Box pt={3.2} as="section">
        <ProductListing products={products} />
      </Box>
      <Box pt={7.4}>
        <Pagination />
      </Box>
    </>
  )
}

export default Page
