import { FiShoppingBag } from 'react-icons/fi'

import styles from './Bag.module.css'

export const Bag = () => {
  const items = 0

  return (
    <div className={styles.bag}>
      <FiShoppingBag className={styles.icon} />
      {items > 0 && <div className={styles.item}>{items}</div>}
    </div>
  )
}
