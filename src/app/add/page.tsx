import { prisma } from '@/lib/prisma'
import { productData } from './productData'

const setPost = async () => {
  try {
    productData().map(async (product: any) => {
      const data = await prisma.product.create({
        data: product,
      })

      console.log('DONE', data.id)
    })
  } catch (error) {
    console.log('ERROR ', error)
  }
}

const Add = async () => {
  const data = await setPost()

  console.log('HERE IS THE DATA', data)

  return <div style={{ padding: '2rem' }}>ADD RECORD</div>
}

export default Add
