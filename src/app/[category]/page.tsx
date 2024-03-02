import { Box } from '@/components'
import { getRecords } from '@/shared/services'
import { CategorySelector, ProductListing, Pagination } from '@/modules'
import { GenerateMetadataTypes, GetDataTypes, PageTypes } from './page.types'

export async function generateMetadata({ params }: GenerateMetadataTypes) {
  const categories = {
    new: 'Discos Novos',
    used: 'Discos Usados',
  }

  return {
    title: categories[params.category],
  }
}

async function getData({ params, searchParams }: GetDataTypes) {
  const itemsPerPage = 12

  return await getRecords({ params, searchParams, itemsPerPage })
}

const Page = async ({ params, searchParams }: PageTypes) => {
  const { products, count } = await getData({ params, searchParams })

  return (
    <>
      <Box pt={3.4}>
        <CategorySelector category={params.category} />
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
