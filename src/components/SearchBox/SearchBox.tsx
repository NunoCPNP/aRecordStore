import { getLanguages } from '@/dictionaries'
import { FiSearch } from 'react-icons/fi'

import styles from './SearchBox.module.css'

export const SearchBox = () => {
  const t = getLanguages()

  return (
    <div className={styles.search}>
      <input className={styles.input} type="text" placeholder={t.searching_for} />
      <FiSearch className={styles.searchIcon} />
    </div>
  )
}
