import { prisma } from '@/lib/prisma'

const getPriceFilter = (filter: string) => {
  switch (filter) {
    case 'price_asc':
      return 'asc'
    case 'price_desc':
      return 'desc'
    default:
      return undefined
  }
}

const getDateFilter = (filter: string) => (filter === 'new' ? 'asc' : undefined)

interface GetRecordsTypes {
  params?: {
    category?: 'used' | 'new'
  }
  searchParams: {
    page: number
    filter: 'new' | 'price_asc' | 'price_desc'
  }
  itemsPerPage: number
}

export const getRecords = async ({ params, searchParams, itemsPerPage }: GetRecordsTypes) => {
  const { page, filter } = searchParams

  try {
    const [count, products] = await prisma.$transaction([
      prisma.product.count({
        where: {
          status: params?.category ? params.category : undefined,
        },
      }),
      prisma.product.findMany({
        skip: !page ? 0 : itemsPerPage * (page - 1),
        take: 12,
        where: {
          status: params?.category ? params.category : undefined,
        },
        orderBy: {
          price: getPriceFilter(filter),
          date_added: getDateFilter(filter),
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
