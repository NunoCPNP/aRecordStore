import { SearchBox, Iconography, Brand } from '@/components'

import styles from './Header.module.css'

export const Header = () => (
  <header className={styles.container}>
    <div className={styles.header}>
      <Brand />
      <SearchBox />
      <div className={styles.icons}>
        <Iconography icon="account" />
        <Iconography icon="wishlist" />
        <Iconography icon="shopping-bag" items={1} />
      </div>
    </div>
  </header>
)
