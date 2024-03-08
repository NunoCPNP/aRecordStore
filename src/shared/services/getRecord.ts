import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

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
    }
  } catch (error) {
    console.log('getRecord error', error)

    return notFound()
  }
}
