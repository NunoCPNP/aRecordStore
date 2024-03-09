'use client'

import { createContext, useState } from 'react'

import type { ShoppingBagContextType } from './ShoppingBag.types'
import type { ComponentWithChildren } from '@/shared/types'

export const ShoppingBagContext = createContext<ShoppingBagContextType>({
  items: [],
  setItems: () => null,
  itemCount: 0,
})

export const ShoppingBagProvider = ({ children }: ComponentWithChildren) => {
  const [items, setItems] = useState([])

  const context = {
    items,
    setItems,
    itemCount: items.length,
  }

  return <ShoppingBagContext.Provider value={context}>{children}</ShoppingBagContext.Provider>
}
