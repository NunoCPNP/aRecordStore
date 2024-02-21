'use client'

import { getLanguages } from '@/dictionaries'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import styles from './Dropdown.module.css'

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const t = getLanguages()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>{t.order_by}</div>
        <div onClick={() => setIsOpen(!isOpen)} data-testid="dropdown-trigger">
          <FiChevronDown className={styles.icon} />
        </div>
      </div>
      {isOpen && (
        <div className={styles.panel} data-testid="dropdown-panel">
          <p className={styles.item} data-testid="dropdown-item-new">
            {t.order_by_new}
          </p>
          <p className={styles.item} data-testid="dropdown-item-price-asc">
            {t.order_by_price_asc}
          </p>
          <p className={styles.item} data-testid="dropdown-item-price-dsc">
            {t.order_by_price_dsc}
          </p>
          <p className={styles.item} data-testid="dropdown-item-top">
            {t.order_by_top}
          </p>
        </div>
      )}
    </div>
  )
}
