import { SearchBox, Bag, Brand } from '@/components'

import styles from './Header.module.css'

export const Header = () => (
  <header className={styles.container}>
    <div className={styles.header}>
      <Brand />
      <SearchBox />
      <Bag />
    </div>
  </header>
)
