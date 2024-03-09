'use client'

import { useShoppingBag } from '@/hooks'
import { useState } from 'react'
import { ShoppingBag } from '@/modules'
import { Iconography, PopOver } from '@/components'

export const ShoppingBagIcon = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { itemCount } = useShoppingBag()

  return (
    <PopOver isOpen={isOpen} setIsOpen={setIsOpen} content={<ShoppingBag />}>
      <Iconography icon="shopping-bag" items={itemCount} />
    </PopOver>
  )
}
