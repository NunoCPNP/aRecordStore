import type { PaginationSkeltonTypes } from './Pagination.types'

import styles from './Pagination.module.scss'

export const PaginationSkeleton = ({ pageNumbers }: PaginationSkeltonTypes) => (
  <>
    {pageNumbers.length === 0 &&
      [1, 2, 3, 4, 5].map((i) => (
        <button key={i}>
          <div className={styles.skeleton}>{i}</div>
        </button>
      ))}
  </>
)
