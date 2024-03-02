import { ProductType } from '@/shared/types'
import { ProductInfo } from '@/modules'
import { getRecord } from '@/shared/services'
import { PageTypes, GetDataTypes } from './page.types'

async function getData({ params }: GetDataTypes) {
  return await getRecord({ params })
}

const Page = async ({ params }: PageTypes) => {
  const { product } = await getData({ params })

  return <ProductInfo data={product as ProductType} />
}

export default Page
