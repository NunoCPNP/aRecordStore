export interface ProductType {
  id: string
  date_added: string
  artist: string
  title: string
  format: 'VINYL' | 'CD'
  country: string
  year: number
  label: string
  catno: string
  genres: string[]
  status: 'USED' | 'NEW'
  cover_status: number
  item_status: number
  thumb: string
  cover_image: string
  price: number
  stock: number
  notes: string
}
