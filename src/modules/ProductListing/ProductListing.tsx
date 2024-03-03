import { Suspense } from 'react'
import type { ProductType } from '@/shared/types'
import type { ProductListingTypes } from './ProductListing.types'
import { ProductGrid, ProductCard } from '@/components'

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
