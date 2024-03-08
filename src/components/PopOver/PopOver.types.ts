import type { ComponentWithChildren } from '@/shared/types'
import type { ReactNode, Dispatch, SetStateAction } from 'react'

export interface PopOverTypes extends ComponentWithChildren {
  content: ReactNode
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
