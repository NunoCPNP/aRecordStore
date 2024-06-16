import { WishListContext } from '@/Context'

import { useContext } from 'react'

export const useWishList = () => useContext(WishListContext)
