import { Box } from '@/components'
import { prisma } from '@/lib/prisma'
import { CategorySelector, ProductListing, Pagination } from '@/modules'

type GenerateMetadataTypes = {
  params: {
    category: 'all' | 'used' | 'new'
  }
}

export async function generateMetadata({ params }: GenerateMetadataTypes) {
  const categories = {
    new: 'Discos Novos',
    used: 'Discos Usados',
    all: 'Todos os Discos',
  }

  return {
    title: categories[params.category],
  }
}

type GetDataTypes = {
  params: {
    category?: 'used' | 'new' | 'all'
  }
  searchParams: {
    page: number
  }
}

async function getData({ params, searchParams }: GetDataTypes) {
  const itemsPerPage = 12

  const { category = 'all' } = params
  const { page = 1 } = searchParams

  try {
    const [count, products] = await prisma.$transaction([
      prisma.product.count({
        where: {
          status: category === 'all' ? undefined : category,
        },
      }),
      prisma.product.findMany({
        skip: page === 1 ? 0 : itemsPerPage * (page - 1),
        take: 12,
        where: {
          status: category === 'all' ? undefined : category,
        },
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

type PageTypes = {
  params: {
    category?: 'all' | 'used' | 'new'
  }
  searchParams: {
    page: number
  }
}

const Home = async ({ params, searchParams }: PageTypes) => {
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
    </>
  )
}

export default Home
