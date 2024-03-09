import styles from './TextSkeleton.module.scss'

export type TextSkeletonTypes = {
  width: number
}

export const TextSkeleton = ({ width }: TextSkeletonTypes) => {
  return <div style={{ width: `${width}%` }} className={styles.textSkeleton}></div>
}
