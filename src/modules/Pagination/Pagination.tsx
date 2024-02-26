'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import styles from './Pagination.module.css'

type PaginationTypes = {
  count: number
}

export const Pagination = ({ count }: PaginationTypes) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([])
  const router = useRouter()

  const totalPages = Math.ceil(count / 12)

  useEffect(() => {
    const temp: number[] = []

    for (let i = 1; i <= totalPages; i++) {
      temp.push(i)
    }

    setPageNumbers(temp)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {pageNumbers.map((number) => (
          <li key={number} className={number === 1 ? styles.selected : styles.item}>
            {number}
          </li>
        ))}
      </ul>
      {pageNumbers.length > 0 && (
        <ul className={styles.controls}>
          <li className={styles.item}>
            <FiChevronLeft />
          </li>
          <li className={styles.item}>
            <FiChevronRight />
          </li>
        </ul>
      )}
    </div>
  )
}
