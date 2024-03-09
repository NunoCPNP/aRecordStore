import { Iconography } from '@/components'
import { Brand, SearchInput, ShoppingBagIcon } from './components'

import styles from './Header.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <div className={styles.header}>
      <Brand />
      <SearchInput />
      <div className={styles.icons}>
        <Iconography icon="account" />
        <Iconography icon="wishlist" />
        <ShoppingBagIcon />
      </div>
    </div>
  </header>
)
