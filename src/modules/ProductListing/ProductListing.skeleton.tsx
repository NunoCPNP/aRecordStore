import { ProductGrid } from './components'
import { ProductCardSkeleton } from './components'

export const ProductListingSkeleton = () => (
  <ProductGrid>
    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </ProductGrid>
)
