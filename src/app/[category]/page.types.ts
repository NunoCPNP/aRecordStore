export interface PageTypes {
  params: {
    category: 'used' | 'new'
  }
  searchParams: {
    page: number
    filter: 'new' | 'price_asc' | 'price_desc'
  }
}

export interface GetDataTypes extends PageTypes {}

export type GenerateMetadataTypes = {
  params: {
    category: 'used' | 'new'
  }
}
