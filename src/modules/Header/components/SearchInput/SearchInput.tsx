'use client'

import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { getLanguages } from '@/dictionaries'
import { usePathname, useRouter } from 'next/navigation'

import styles from './SearchInput.module.scss'

export const SearchInput = () => {
  const t = getLanguages()
  const router = useRouter()
  const pathname = usePathname()

  const [value, setValue] = useState('')

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        placeholder={t.searching_for}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value.length === 0 ? (
        <FiSearch className={styles.searchIcon} />
      ) : (
        <button
          className={styles.searchButton}
          onClick={() => {
            const search = value.replace(' ', '-')

            router.push(`${pathname}search/?search=${search}`)
          }}
        >
          search
        </button>
      )}
    </div>
  )
}
