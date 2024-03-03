import { Suspense } from 'react'
import type { ProductType } from '@/shared/types'
import type { ProductListingTypes } from './ProductListing.types'
import { ProductGrid, ProductCard } from '@/components'

export const ProductListing = ({ products }: ProductListingTypes) => {
  return (
    <ProductGrid>
      {products.map((product: ProductType) => (
        <Suspense key={product.id} fallback={<div>Loading...</div>}>
          <ProductCard key={product.id} product={product} />
        </Suspense>
      ))}
    </ProductGrid>
  )
}
