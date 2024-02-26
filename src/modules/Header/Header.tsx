import Image from 'next/image'
import Link from 'next/link'
import { SearchBox, Bag } from '@/components'

import styles from './Header.module.css'

export const Header = () => (
  <header className={styles.container}>
    <div className={styles.header}>
      <Link href="/" className={styles.brand}>
        <h1>THE</h1>
        <span className={styles.logo}>
          <Image src="/vinyl.png" alt="" width={38} height={38} />
        </span>
        <h1>STORE</h1>
      </Link>
      <SearchBox />
      <Bag items={2} />
    </div>
  </header>
)
