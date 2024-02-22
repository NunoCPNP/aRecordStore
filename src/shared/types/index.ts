export interface ProductType {
  id: string
  date_added: string
  artist: string
  title: string
  format: 'vinyl' | 'cd'
  country: string
  year: number
  label: string
  catno: string
  genres: string[]
  status: 'used' | 'new'
  cover_status: number
  item_status: number
  cover_image: string
  price: number
  stock: number
  notes: string
}
