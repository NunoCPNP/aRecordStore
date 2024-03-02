'use client'

import { useRef, useEffect, useState } from 'react'
import { filters } from './Dropdown.constants'
import { getLanguages } from '@/dictionaries'
import { FiChevronDown } from 'react-icons/fi'
import { usePathname, useRouter } from 'next/navigation'

import styles from './Dropdown.module.css'

export const Dropdown = () => {
  const t = getLanguages()
  const newRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string | undefined>(undefined)

  const handleOutsideClick = (e: MouseEvent) => {
    if (newRef.current && !newRef.current.contains(e.target as Node)) {
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
    <div className={styles.wrapper} ref={newRef} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.container}>
        <div>{selected ? selected : t['order_by']}</div>
        <div data-testid="dropdown-trigger">
          <FiChevronDown className={styles.icon} />
        </div>
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
                {t[filter.name]}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
