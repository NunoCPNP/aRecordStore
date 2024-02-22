import { Box } from '@/components'
import { prisma } from '@/lib/prisma'
import { CategorySelector, Pagination, ProductListing } from '@/modules'

async function getData() {
  const data = await prisma.product.findMany()

  return {
    data,
  }
}

const Home = async () => {
  const { data } = await getData()

  return (
    <>
      <Box pt={3.4}>
        <CategorySelector />
      </Box>
      <Box pt={3.2} as="section">
        <ProductListing data={data} />
      </Box>
    </>
  )
}

export default Home
