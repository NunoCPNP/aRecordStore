import { FiSearch } from 'react-icons/fi'
import { getLanguages } from '@/dictionaries'

import styles from './SearchInput.module.scss'

export const SearchInput = () => {
  const t = getLanguages()

  return (
    <div className={styles.search}>
      <input className={styles.input} type="text" placeholder={t.searching_for} />
      <FiSearch className={styles.searchIcon} />
    </div>
  )
}
