import Link from 'next/link'
import { getLanguages } from '@/dictionaries'
import { categories } from './CategorySelector.constants'
import type { CategorySelectorTypes } from './CategorySelector.types'

import styles from './CategorySelector.module.css'

export const CategorySelector = ({ category: activeCategory }: CategorySelectorTypes) => {
  const t = getLanguages()

  return (
    <div>
      <ul className={styles.list}>
        {categories.map((category) => {
          const url = category.category ? `/${category.category}` : '/'

          return (
            <li key={category.id} className={activeCategory === category.category ? styles.selected : styles.item}>
              <Link href={url}>{t[category.name]}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
