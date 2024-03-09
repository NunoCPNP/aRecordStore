import { ShoppingBagContext } from '@/Context'

import { useContext } from 'react'

export const useShoppingBag = () => useContext(ShoppingBagContext)
