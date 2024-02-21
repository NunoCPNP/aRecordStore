import { db } from '@/lib/firebase'
import { ProductType } from '@/shared/types'
import { ProductInfo } from '@/modules'
import { doc, getDoc } from 'firebase/firestore'

type ProductTypes = {
  params: {
    id: string
  }
}

async function getData({ params }: ProductTypes) {
  const { id } = params

  const docRef = doc(db, 'records', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return {
      data: docSnap.data(),
      error: null,
    }
  }

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
