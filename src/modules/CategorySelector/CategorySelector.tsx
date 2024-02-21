'use client'

import { Dropdown } from '@/components'
import { getLanguages } from '@/dictionaries'
import { useRouter } from 'next/navigation'
import { categories } from './CategorySelector.constants'

import styles from './CategorySelector.module.css'

type CategorySelectorTypes = {
  category: string
  page: number
}

export const CategorySelector = ({ category: selectedCategory, page }: CategorySelectorTypes) => {
  const router = useRouter()
  const t = getLanguages()

  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.list}>
          {categories.map((category) => (
            <li key={category.id} className={category.queryParam === selectedCategory ? styles.selected : styles.item}>
              <a onClick={() => router.push(`/?category=${category.queryParam}&page=${page}`)}>{t[category.name]}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.dropdown}>
        <Dropdown />
      </div>
    </div>
  )
}
