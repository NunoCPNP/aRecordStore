'use client'

import { createContext, useState } from 'react'

import type { WishListContextType } from './WishList.types'
import type { ComponentWithChildren } from '@/shared/types'

export const WishListContext = createContext<WishListContextType>({
  items: [],
  setItems: () => null,
  itemCount: 0,
})

export const WishListProvider = ({ children }: ComponentWithChildren) => {
  const [items, setItems] = useState([])

  const context = {
    items,
    setItems,
    itemCount: items.length,
  }

  return <WishListContext.Provider value={context}>{children}</WishListContext.Provider>
}
