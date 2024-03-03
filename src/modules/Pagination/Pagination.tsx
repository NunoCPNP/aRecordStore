'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import styles from './Pagination.module.css'

export const Pagination = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(5)
  const [count, setCount] = useState(0)

  const page = searchParams.get('page') || 1
  const filter = searchParams.get('filter')
  const totalPages = Math.ceil(count / 12)

  useEffect(() => {
    const category = pathname.slice(1) || undefined

    const fetchCount = async () => {
      const response = await fetch('/api/count', {
        method: 'POST',
        body: JSON.stringify({ category }),
      })

      const data = await response.json()

      setCount(data)
    }

    fetchCount()
  }, [pathname])

  const buildUrl = useCallback(
    (page: number, filter: string) => router.push(`${pathname}?page=${page}${filter ? `&filter=${filter}` : ''}`),
    [router, pathname],
  )

  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }, [totalPages])

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {pageNumbers.slice(start, end).map((number) => (
          <button key={number} onClick={() => buildUrl(number, filter!)}>
            <div className={number === Number(page) ? styles.selected : styles.item}>{number}</div>
          </button>
        ))}
      </div>
      <div className={styles.controls}>
        <button
          aria-label="previous page"
          onClick={() => {
            if (start > 0) {
              setStart((s) => s - 1)
              setEnd((e) => e - 1)
            }
          }}
        >
          <div className={styles.item}>
            <FiChevronLeft />
          </div>
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
          <div className={styles.item}>
            <FiChevronRight />
          </div>
        </button>
      </div>
    </div>
  )
}
