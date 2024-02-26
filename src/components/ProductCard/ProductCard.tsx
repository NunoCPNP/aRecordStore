'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/shared/types'
import { usePathname } from 'next/navigation'

import styles from './ProductCard.module.css'

type ProductCardTypes = {
  product: ProductType
}

export const ProductCard = ({ product }: ProductCardTypes) => {
  const pathname = usePathname()

  const id = pathname === '/' ? product.id : `/${product.id}`

  return (
    <Link href={`${pathname}${id}`} className={styles.container}>
      <div className={styles.image}>
        <Image
          src={product.cover_image}
          alt={`${product.title} cover`}
          width={250}
          height={250}
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
