import Image from 'next/image'
import { SearchBox, Bag } from '@/components'

import styles from './Header.module.css'

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.brand}>
      <h1>THE</h1>
      <span className={styles.logo}>
        <Image src="/vinyl.png" alt="" width={38} height={38} />
      </span>
      <h1>STORE</h1>
    </div>
    <SearchBox />
    <Bag items={2} />
  </header>
)
