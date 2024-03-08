import { Suspense } from 'react'
import { ProductGrid, ProductCard } from './components'
import { getRecords } from '@/shared/services'

import type { ProductType } from '@/shared/types'
import type { ProductListingTypes, GetDataTypes } from './ProductListing.types'

async function getData({ params, searchParams }: GetDataTypes) {
  const itemsPerPage = 12

  return await getRecords({ params, searchParams, itemsPerPage })
}

export const ProductListing = async ({ params, searchParams }: ProductListingTypes) => {
  const { products } = await getData({ params, searchParams })

  return (
    <ProductGrid>
      {products.map((product: ProductType) => (
        <Suspense key={product.id}>
          <ProductCard product={product} />
        </Suspense>
      ))}
    </ProductGrid>
  )
}
