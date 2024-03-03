import { prisma } from '@/lib/prisma'

export const getCount = async (category: 'new' | 'used' | undefined = undefined) => {
  try {
    const count = await prisma.product.count({
      where: {
        status: category,
      },
    })

    return count
  } catch (error) {
    console.log('getCount error', error)

    return null
  }
}
