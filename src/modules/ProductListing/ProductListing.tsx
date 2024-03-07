import { Suspense } from 'react'
import { ProductGrid, ProductCard } from './components'

import type { ProductType } from '@/shared/types'
import type { ProductListingTypes } from './ProductListing.types'

export const ProductListing = ({ products }: ProductListingTypes) => {
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
