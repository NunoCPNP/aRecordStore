import { Box } from '@/components'
import { prisma } from '@/lib/prisma'
import { CategorySelector, ProductListing } from '@/modules'

type PageTypes = {
  params: { [key: string]: string | undefined }
}

async function getData({ params }: PageTypes) {
  const { category = 'all' } = params

  const filter = category === 'all' ? {} : { where: { status: { equals: category } } }

  const data = await prisma.product.findMany(filter as any)

  return {
    data,
  }
}

const Home = async ({ params }: PageTypes) => {
  const { data } = await getData({ params })

  return (
    <>
      <Box pt={3.4}>
        <CategorySelector category={params.category} />
      </Box>
      <Box pt={3.2} as="section">
        <ProductListing data={data} />
      </Box>
    </>
  )
}

export default Home
