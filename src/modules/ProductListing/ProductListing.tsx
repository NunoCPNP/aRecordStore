import { ProductType } from '@/shared/types'
import { ProductGrid, ProductCard } from '@/components'

type ProductListingTypes = {
  products: ProductType[]
}

export const ProductListing = ({ products }: ProductListingTypes) => {
  return (
    <ProductGrid>
      {products.map((product: ProductType) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ProductGrid>
  )
}
