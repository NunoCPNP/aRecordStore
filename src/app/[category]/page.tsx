import { Box } from '@/components'
import { getRecords } from '@/shared/services'
import { ProductFilters, ProductListing, Pagination } from '@/modules'

import type { GetDataTypes, PageTypes } from './page.types'

async function getData({ params, searchParams }: GetDataTypes) {
  const itemsPerPage = 12

  return await getRecords({ params, searchParams, itemsPerPage })
}

const Page = async ({ params, searchParams }: PageTypes) => {
  const { products } = await getData({ params, searchParams })

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
