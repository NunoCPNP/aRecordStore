import type { ComponentWithChildren } from '@/shared/types'

import styles from './ProductGrid.module.css'

export const ProductGrid = ({ children }: ComponentWithChildren) => {
  return <div className={styles.grid}>{children}</div>
}
