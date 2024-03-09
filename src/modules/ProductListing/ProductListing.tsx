import { getRecords } from '@/shared/services'
import { ProductGrid, ProductCard } from './components'

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
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  )
}
