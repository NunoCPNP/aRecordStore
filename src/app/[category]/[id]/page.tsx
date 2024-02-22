import { ProductType } from '@/shared/types'
import { ProductInfo } from '@/modules'

type ProductTypes = {
  params: {
    id: string
  }
}

async function getData({ params }: ProductTypes) {
  const { id } = params

  return {
    data: null,
    error: 'Document not found',
  }
}

const Product = async ({ params }: ProductTypes) => {
  const { data } = await getData({ params })

  return <ProductInfo data={data as ProductType | null} />
}

export default Product
