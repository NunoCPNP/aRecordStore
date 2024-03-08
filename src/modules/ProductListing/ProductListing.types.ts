import { ProductType } from '@/shared/types'

export type ProductListingTypes = {
  searchParams: {
    page: number
    filter: 'new' | 'price_asc' | 'price_desc'
  }
  params?: {
    category: 'new' | 'used'
  }
}
export interface GetDataTypes extends ProductListingTypes {}
