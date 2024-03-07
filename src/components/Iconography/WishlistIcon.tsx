import { FiHeart } from 'react-icons/fi'

import styles from './WishlistIcon.module.css'

export const WishlistIcon = ({ items = 0 }) => {
  return (
    <div className={styles.container}>
      <FiHeart className={styles.icon} />
      {items > 0 && <div className={styles.item}>{items}</div>}
    </div>
  )
}
