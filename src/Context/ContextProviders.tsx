import { ShoppingBagProvider } from './ShoppingBag'

import { ComponentWithChildren } from '@/shared/types'

export function Providers({ children }: ComponentWithChildren) {
  return <ShoppingBagProvider>{children}</ShoppingBagProvider>
}
