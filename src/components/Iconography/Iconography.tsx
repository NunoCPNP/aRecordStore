import { AccountIcon } from './AccountIcon'
import { ShoppingBagIcon } from './ShoppingBagIcon'
import { WishlistIcon } from './WishlistIcon'

import type { IconographyTypes } from './Iconography.types'

export const Iconography = ({ icon, items }: IconographyTypes) => {
  return (
    <>
      {icon === 'account' && <AccountIcon />}
      {icon === 'shopping-bag' && <ShoppingBagIcon items={items} />}
      {icon === 'wishlist' && <WishlistIcon items={items} />}
    </>
  )
}
