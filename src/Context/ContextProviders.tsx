import { ShoppingBagProvider } from './ShoppingBag'
import { WishListProvider } from './Wishlist'

import { ComponentWithChildren } from '@/shared/types'

export function Providers({ children }: ComponentWithChildren) {
  return (
    <WishListProvider>
      <ShoppingBagProvider>{children}</ShoppingBagProvider>
    </WishListProvider>
  )
}
