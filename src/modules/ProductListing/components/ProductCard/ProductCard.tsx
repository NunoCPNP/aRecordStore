import Image from 'next/image'
import Link from 'next/link'
import { shimmer, toBase64 } from '@/shared/functions'

import type { ProductCardTypes } from './ProductCard.types'

import styles from './ProductCard.module.scss'

export const ProductCard = ({ product }: ProductCardTypes) => {
  const url = `/${product.status}/${product.id}`

  return (
    <Link href={url} className={styles.container}>
      <div>
        <Image
          src={product.cover_image}
          alt={`${product.title} cover`}
          width={0}
          height={0}
          sizes="100vw"
          className={styles.image}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 250))}`}
        />
      </div>
      <div className={styles.info}>
        <div>
          <p className={styles.artist}>{product.artist}</p>
          <p className={styles.title}>{product.title}</p>
        </div>
        <p className={styles.price}>{product.price} €</p>
      </div>
    </Link>
  )
}
