'use client'

import type { PaginationTypes } from './Pagination.types'
import { useEffect, useMemo, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import styles from './Pagination.module.css'

export const Pagination = ({ count }: PaginationTypes) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(5)

  const page = searchParams.get('page') || 1
  const filter = searchParams.get('filter')
  const totalPages = Math.ceil(count / 12)

  const buildUrl = useMemo(() => {
    return (page: number, filter: string) => router.push(`${pathname}?page=${page}${filter ? `&filter=${filter}` : ''}`)
  }, [page, filter])

  useEffect(() => {
    const pagesNumbers: number[] = []

    for (let i = 1; i <= totalPages; i++) {
      pagesNumbers.push(i)
    }

    setPageNumbers(pagesNumbers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {[...pageNumbers].slice(start, end).map((number) => (
          <li
            key={number}
            onClick={() => buildUrl(number, filter!)}
            className={number === Number(page) ? styles.selected : styles.item}
          >
            {number}
          </li>
        ))}
      </ul>
      <ul className={styles.controls}>
        <li className={styles.item}>
          <FiChevronLeft
            onClick={() => {
              if (start > 0) {
                setStart((s) => s - 1)
                setEnd((e) => e - 1)
              }
            }}
          />
        </li>
        <li className={styles.item}>
          <FiChevronRight
            onClick={() => {
              if (end < totalPages) {
                setStart((s) => s + 1)
                setEnd((e) => e + 1)
              }
            }}
          />
        </li>
      </ul>
    </div>
  )
}
