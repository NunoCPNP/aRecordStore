import type { Dispatch, SetStateAction } from 'react'

export type ShoppingBagContextType = {
  items: any
  setItems: Dispatch<SetStateAction<any>>
  itemCount: number
}
