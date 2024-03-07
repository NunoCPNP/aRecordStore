import Image from 'next/image'
import { FiShoppingBag } from 'react-icons/fi'
import { getLanguages } from '@/dictionaries'

import type { ProductInfoTypes } from './ProductInfo.types'

import styles from './ProductInfo.module.scss'

export const ProductInfo = ({ data }: ProductInfoTypes) => {
  const t = getLanguages()

  return (
    <div className={styles.container}>
      <div>
        <Image src={data.cover_image} alt="" width={0} height={0} sizes="100vw" className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <div>
          <div>{t[`item_${data.status}`]}</div>
          <div className={styles.artist}>{data.artist}</div>
          <div>{data.title}</div>
          <div>{data.label}</div>
          <div>{data.country}</div>
          <div>{data.year}</div>
          <div>{data.catno}</div>
          <div className={styles.price}>{data.price} €</div>
        </div>
        <div>
          <button className={styles.button}>
            <FiShoppingBag className={styles.icon} />
            <span>{t['add_to_cart']}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
