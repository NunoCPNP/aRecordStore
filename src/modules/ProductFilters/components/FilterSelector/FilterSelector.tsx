'use client'

import { filters } from './FilterSelector.constants'
import { getLanguages } from '@/dictionaries'
import { FiChevronDown } from 'react-icons/fi'
import { useRef, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import styles from './FilterSelector.module.scss'

export const FilterSelector = () => {
  const t = getLanguages()
  const ref = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string | undefined>(undefined)

  const handleOutsideClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  })

  return (
    <button className={styles.container} ref={ref} onClick={() => setIsOpen(!isOpen)}>
      <div data-testid="dropdown-trigger">
        <div>{selected ? selected : t['order_by']}</div>
        <FiChevronDown className={styles.icon} />
      </div>
      {isOpen && (
        <ul className={styles.panel} data-testid="dropdown-panel">
          {filters.map((filter) => {
            return (
              <li
                key={filter.id}
                className={styles.item}
                onClick={() => {
                  router.push(`${pathname}?page=${1}&filter=${filter.category}`)
                  setSelected(t[filter.name])
                  setIsOpen(false)
                }}
                data-testid={filter.testid}
              >
                <button>{t[filter.name]}</button>
              </li>
            )
          })}
        </ul>
      )}
    </button>
  )
}
