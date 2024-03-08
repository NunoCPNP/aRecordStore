import styles from './Pagination.module.scss'

export const PaginationSkeleton = () => (
  <>
    <div className={styles.container}>
      <div className={styles.list}>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <button key={i}>
            <div className={styles.skeleton}>{i}</div>
          </button>
        ))}
      </div>
    </div>
  </>
)
