import { FiShoppingBag } from 'react-icons/fi'

import styles from './ShoppingBagIcon.module.css'

export const ShoppingBagIcon = ({ items = 0 }) => {
  return (
    <div className={styles.container}>
      <FiShoppingBag className={styles.icon} />
      {items > 0 && <div className={styles.item}>{items}</div>}
    </div>
  )
}
