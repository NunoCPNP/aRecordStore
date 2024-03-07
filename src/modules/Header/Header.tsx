import { Iconography } from '@/components'
import { Brand, SearchInput } from './components'

import styles from './Header.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <div className={styles.header}>
      <Brand />
      <SearchInput />
      <div className={styles.icons}>
        <Iconography icon="account" />
        <Iconography icon="wishlist" />
        <Iconography icon="shopping-bag" items={1} />
      </div>
    </div>
  </header>
)
