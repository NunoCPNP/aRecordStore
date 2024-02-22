'use client'

import { Dropdown } from '@/components'
import { getLanguages } from '@/dictionaries'
import { useRouter } from 'next/navigation'
import { categories } from './CategorySelector.constants'

import styles from './CategorySelector.module.css'

type CategorySelectorTypes = {
  category?: string
}

export const CategorySelector = ({ category }: CategorySelectorTypes) => {
  const router = useRouter()
  const t = getLanguages()

  const activeCategory = category || 'all'

  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.list}>
          {categories.map((category) => (
            <li key={category.id} className={activeCategory === category.category ? styles.selected : styles.item}>
              <a onClick={() => router.push(`/${category.category}`)}>{t[category.name]}</a>
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
