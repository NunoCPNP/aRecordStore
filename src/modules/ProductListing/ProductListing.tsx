import type { ProductType } from '@/shared/types'
import type { ProductListingTypes } from './ProductListing.types'
import { ProductGrid, ProductCard } from '@/components'

export const ProductListing = ({ products }: ProductListingTypes) => {
  return (
    <ProductGrid>
      {products.map((product: ProductType) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  )
}
