'use client'

import { useState } from 'react'
import { Iconography, PopOver } from '@/components'

export const ShoppingBag = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <PopOver isOpen={isOpen} setIsOpen={setIsOpen} content={<div></div>}>
      <Iconography icon="shopping-bag" items={1} />
    </PopOver>
  )
}
