import type { Dispatch, SetStateAction } from 'react'

export type WishListContextType = {
  items: any
  setItems: Dispatch<SetStateAction<any>>
  itemCount: number
}
