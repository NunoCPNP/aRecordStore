import { Box } from '@/components'
import { getRecords } from '@/shared/services'
import type { PageTypes, GetDataTypes } from './page.types'
import { CategorySelector, ProductListing, Pagination } from '@/modules'

async function getData({ searchParams }: GetDataTypes) {
  const itemsPerPage = 12

  return await getRecords({ searchParams, itemsPerPage })
}

const Page = async ({ searchParams }: PageTypes) => {
  const { products, count } = await getData({ searchParams })

  return (
    <>
      <Box pt={3.4}>
        <CategorySelector />
      </Box>
      <Box pt={2.4}>
        <Pagination count={count} />
      </Box>
      <Box pt={3.2} as="section">
        <ProductListing products={products} />
      </Box>
      <Box pt={7.4}>
        <Pagination count={count} />
      </Box>
    </>
  )
}

export default Page
