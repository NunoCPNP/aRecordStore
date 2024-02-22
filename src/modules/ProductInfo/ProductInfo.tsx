import Image from 'next/image'
import { ProductType } from '@/shared/types'
import { FiShoppingBag } from 'react-icons/fi'

import styles from './ProductInfo.module.css'

type ProductInfo = {
  data: ProductType | null
}

const categoryMatch: { [key: string]: string } = {
  new: 'Disco novo',
  used: 'Disco usado',
}

export const ProductInfo = ({ data }: ProductInfo) => {
  if (!data) return <div>to do</div>

  return (
    <div className={styles.container}>
      <div>
        <Image src={data.cover_image} alt="" width={0} height={0} sizes="100vw" className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <div>
          <div>{categoryMatch[data.status]}</div>
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
            <span>Adicionar ao carrinho</span>
          </button>
        </div>
      </div>
    </div>
  )
}
