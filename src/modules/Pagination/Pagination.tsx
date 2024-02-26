'use client'

import { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import styles from './Pagination.module.css'

type PaginationTypes = {
  count: number
}

export const Pagination = ({ count }: PaginationTypes) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([])

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const page = Number(searchParams.get('page')) || 1
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
          <li
            key={number}
            onClick={() => router.push(`${pathname}?page=${number}`)}
            className={number === page ? styles.selected : styles.item}
          >
            {number}
          </li>
        ))}
      </ul>
      <ul className={styles.controls}>
        <li className={styles.item}>
          <FiChevronLeft onClick={() => page > 1 && router.push(`${pathname}?page=${page - 1}`)} />
        </li>
        <li className={styles.item}>
          <FiChevronRight onClick={() => page < totalPages && router.push(`${pathname}?page=${page + 1}`)} />
        </li>
      </ul>
    </div>
  )
}
