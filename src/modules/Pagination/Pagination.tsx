'use client'

import type { PaginationTypes } from './Pagination.types'
import { useCallback, useMemo, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import styles from './Pagination.module.css'

export const Pagination = ({ count }: PaginationTypes) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(5)

  const page = searchParams.get('page') || 1
  const filter = searchParams.get('filter')
  const totalPages = Math.ceil(count / 12)

  const buildUrl = useCallback(
    (page: number, filter: string) => router.push(`${pathname}?page=${page}${filter ? `&filter=${filter}` : ''}`),
    [router, pathname],
  )

  const pageNumbers = useMemo(() => {
    const pagesNumbers: number[] = []

    for (let i = 1; i <= totalPages; i++) {
      pagesNumbers.push(i)
    }

    return pagesNumbers
  }, [totalPages])

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {pageNumbers.slice(start, end).map((number) => (
          <button key={number} onClick={() => buildUrl(number, filter!)}>
            <li className={number === Number(page) ? styles.selected : styles.item}>{number}</li>
          </button>
        ))}
      </ul>
      <ul className={styles.controls}>
        <button
          aria-label="previous page"
          onClick={() => {
            if (start > 0) {
              setStart((s) => s - 1)
              setEnd((e) => e - 1)
            }
          }}
        >
          <li className={styles.item}>
            <FiChevronLeft />
          </li>
        </button>
        <button
          aria-label="next page"
          onClick={() => {
            if (end < totalPages) {
              setStart((s) => s + 1)
              setEnd((e) => e + 1)
            }
          }}
        >
          <li className={styles.item}>
            <FiChevronRight />
          </li>
        </button>
      </ul>
    </div>
  )
}
