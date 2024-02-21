import { FiShoppingBag } from 'react-icons/fi'

import styles from './Bag.module.css'

type BagTypes = {
  items: number
}

export const Bag = ({ items }: BagTypes) => {
  return (
    <div className={styles.bag}>
      <FiShoppingBag className={styles.icon} />
      {items > 0 && <div className={styles.item}>{items}</div>}
    </div>
  )
}
