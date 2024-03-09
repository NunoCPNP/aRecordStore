import { TextSkeleton } from '@/components'

import styles from './ProductCard.module.scss'

export const ProductCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSkeleton}></div>
      <div className={styles.info}>
        <div>
          <div className={styles.artist}>
            <TextSkeleton width={50} />
          </div>
          <div className={styles.title}>
            <TextSkeleton width={70} />
          </div>
        </div>
        <div className={styles.price}>
          <TextSkeleton width={30} />
        </div>
      </div>
    </div>
  )
}
