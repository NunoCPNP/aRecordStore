import type { ComponentWithChildren } from '@/shared/types'

import styles from './ProductGrid.module.scss'

export const ProductGrid = ({ children }: ComponentWithChildren) => {
  return <div className={styles.grid}>{children}</div>
}
