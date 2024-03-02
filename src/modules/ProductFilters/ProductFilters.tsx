import { Dropdown, CategorySelector, Box } from '@/components'
import { ProductFiltersTypes } from './ProductFilters.types'

import styles from './ProductFilters.module.css'

export const ProductFilters = ({ category }: ProductFiltersTypes) => {
  return (
    <div className={styles.container}>
      <CategorySelector category={category} />
      <Box pb={0.5}>
        <Dropdown />
      </Box>
    </div>
  )
}
