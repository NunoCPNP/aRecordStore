import { prisma } from '@/lib/prisma'

interface GetRecordTypes {
  params: {
    id: string
  }
}

export const getRecord = async ({ params }: GetRecordTypes) => {
  const { id } = params

  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    return {
      product,
      error: null,
    }
  } catch (error) {
    return {
      product: null,
      error,
    }
  }
}
