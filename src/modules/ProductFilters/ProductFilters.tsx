import { Dropdown, CategorySelector, Box } from '@/components'

import styles from './ProductFilters.module.css'

export const ProductFilters = () => {
  return (
    <div className={styles.container}>
      <CategorySelector />
      <Box pb={0.5}>
        <Dropdown />
      </Box>
    </div>
  )
}
