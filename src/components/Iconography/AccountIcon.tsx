import { FiUser } from 'react-icons/fi'

import styles from './AccountIcon.module.css'

export const AccountIcon = () => {
  return (
    <div className={styles.container}>
      <FiUser className={styles.icon} />
    </div>
  )
}
