import { Box } from '@/components'
import { prisma } from '@/lib/prisma'
import { CategorySelector, Pagination, ProductListing } from '@/modules'

type PageTypes = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

async function getData({ searchParams }: PageTypes) {
  const data = await prisma.product.findMany()

  return {
    data,
    totalPosts: 11,
    postsPerPage: 8,
  }
}

const Home = async ({ searchParams }: PageTypes) => {
  const { data, postsPerPage, totalPosts } = await getData({ searchParams })

  const category = searchParams!['category'] ?? 'all'
  const page = searchParams!['page'] ?? 1

  return (
    <>
      <Box pt={3.4}>
        <CategorySelector category={category as string} page={page as number} />
      </Box>
      <Box pt={2}>
        <Pagination
          category={category as string}
          page={page as number}
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
        />
      </Box>
      <Box pt={3.2} as="section">
        <ProductListing data={data} />
      </Box>
      <Box pt={7.4}>
        <Pagination
          category={category as string}
          page={page as number}
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
        />
      </Box>
    </>
  )
}

export default Home
