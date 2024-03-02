import Link from 'next/link'
import Image from 'next/image'

import styles from './Brand.module.css'

export const Brand = () => (
  <div className={styles.container}>
    <Link href="/">
      <h1>THE</h1>
      <span className={styles.logo}>
        <Image src="/vinyl.png" alt="" width={38} height={38} />
      </span>
      <h1>STORE</h1>
    </Link>
  </div>
)
