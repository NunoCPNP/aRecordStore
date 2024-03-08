export interface PageTypes {
  params: {
    category: 'used' | 'new'
  }
  searchParams: {
    page: number
    filter: 'new' | 'price_asc' | 'price_desc'
  }
}
