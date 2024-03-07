import { Box } from '@/components'
import { FilterSelector, CategorySelector } from './components'

import styles from './ProductFilters.module.scss'

export const ProductFilters = () => {
  return (
    <div className={styles.container}>
      <CategorySelector />
      <Box pb={0.5}>
        <FilterSelector />
      </Box>
    </div>
  )
}
