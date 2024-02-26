import { Box } from '@/components'
import { prisma } from '@/lib/prisma'
import { CategorySelector, ProductListing, Pagination } from '@/modules'

async function getData() {
  try {
    const [count, products] = await prisma.$transaction([
      prisma.product.count(),
      prisma.product.findMany({
        take: 12,
      }),
    ])

    return {
      count,
      products,
      error: null,
    }
  } catch (error) {
    return {
      count: 0,
      products: [],
      error,
    }
  }
}

const Home = async () => {
  const { products, count } = await getData()

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
    </>
  )
}

export default Home
