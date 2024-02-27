import { Box } from '@/components'
import { prisma } from '@/lib/prisma'
import type { HomeTypes } from './page.types'
import { CategorySelector, ProductListing, Pagination } from '@/modules'

async function getData({ params, searchParams }: HomeTypes) {
  const { page = 1 } = searchParams
  const itemsPerPage = 12

  try {
    const [count, products] = await prisma.$transaction([
      prisma.product.count(),
      prisma.product.findMany({
        skip: page === 1 ? 0 : itemsPerPage * (page - 1),
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

const Home = async ({ params, searchParams }: HomeTypes) => {
  const { products, count } = await getData({ params, searchParams })

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

export default Home
