'use client'

import Link from 'next/link'
import { getLanguages } from '@/dictionaries'
import { usePathname } from 'next/navigation'
import { categories } from './CategorySelector.constants'

import styles from './CategorySelector.module.scss'

export const CategorySelector = () => {
  const pathname = usePathname()
  const t = getLanguages()

  return (
    <ul className={styles.container}>
      {categories.map((category) => {
        const url = category.category ? `/${category.category}` : '/'

        return (
          <li key={category.id} className={pathname === url ? styles.selected : styles.item}>
            <Link href={url}>{t[category.name]}</Link>
          </li>
        )
      })}
    </ul>
  )
}
