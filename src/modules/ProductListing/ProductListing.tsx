import { ProductType } from '@/shared/types'
import { ProductGrid, ProductCard } from '@/components'

type ProductListingTypes = {
  data: ProductType[]
}

export const ProductListing = ({ data }: ProductListingTypes) => {
  return (
    <ProductGrid>
      {data.map((product: ProductType) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ProductGrid>
  )
}
