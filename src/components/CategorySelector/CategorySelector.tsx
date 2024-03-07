'use client'

import Link from 'next/link'
import { getLanguages } from '@/dictionaries'
import { usePathname } from 'next/navigation'
import { categories } from './CategorySelector.constants'

import styles from './CategorySelector.module.css'

export const CategorySelector = () => {
  // const params = useParams<{ tag: string; item: string }>()
  const pathname = usePathname()
  const t = getLanguages()

  return (
    <div>
      <ul className={styles.list}>
        {categories.map((category) => {
          const url = category.category ? `/${category.category}` : '/'

          return (
            <li key={category.id} className={pathname === url ? styles.selected : styles.item}>
              <Link href={url}>{t[category.name]}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
