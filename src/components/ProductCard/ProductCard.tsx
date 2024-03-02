import Image from 'next/image'
import Link from 'next/link'
import type { ProductCardTypes } from './ProductCard.types'

import styles from './ProductCard.module.css'

export const ProductCard = ({ product }: ProductCardTypes) => {
  const url = `/${product.status}/${product.id}`

  return (
    <Link href={url} className={styles.container}>
      <div className={styles.image}>
        <Image
          src={product.cover_image}
          alt={`${product.title} cover`}
          width={0}
          height={0}
          sizes="100vw"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <div>
          <div className={styles.artist}>{product.artist}</div>
          <div className={styles.title}>{product.title}</div>
        </div>
        <div className={styles.price}>{product.price} €</div>
      </div>
    </Link>
  )
}
