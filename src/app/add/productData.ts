import { ProductType } from '@/shared/types'

import data from './inital_stock_2402.json'

type ProductDataTypes = Omit<ProductType, 'id'>

export const productData = () => {
  const formattedData: ProductDataTypes[] = []

  data.map((item: any) => {
    formattedData.push({
      date_added: item.date_added,
      artist: item.artist,
      title: item.title,
      format: item.format,
      country: item.country,
      year: Number(item.year),
      label: item.label,
      catno: item.catno,
      genres: JSON.parse(item.genres),
      status: item.status,
      cover_status: Number(item.cover_status),
      item_status: Number(item.item_status),
      cover_image: item.cover_image,
      price: Number(item.price),
      stock: Number(item.stock),
      notes: item.notes || '',
    })
  })

  return formattedData
}
