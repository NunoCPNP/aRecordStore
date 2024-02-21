'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import styles from './Pagination.module.css'

type PaginationTypes = {
  category: string
  page: number
  totalPosts: number
  postsPerPage: number
}

export const Pagination = ({ category, page, totalPosts, postsPerPage }: PaginationTypes) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([])
  const router = useRouter()

  const totalPages = Math.ceil(totalPosts / postsPerPage)

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
            className={Number(page) === number ? styles.selected : styles.item}
            onClick={() => router.push(`/?category=${category}&page=${number}`)}
          >
            {number}
          </li>
        ))}
      </ul>
      {pageNumbers.length > 0 && (
        <ul className={styles.controls}>
          <li
            className={styles.item}
            onClick={() => {
              const array = [...pageNumbers]
              array[0] > 1 && array.unshift(array[0] - 1)

              setPageNumbers(array)
            }}
          >
            <FiChevronLeft />
          </li>
          <li
            className={styles.item}
            onClick={() => {
              const array = [...pageNumbers]

              array.length < totalPages && array.shift()

              setPageNumbers(array)
            }}
          >
            <FiChevronRight />
          </li>
        </ul>
      )}
    </div>
  )
}
