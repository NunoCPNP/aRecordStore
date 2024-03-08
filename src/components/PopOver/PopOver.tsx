import type { PopOverTypes } from './PopOver.types'

import styles from './PopOver.module.scss'

export const PopOver = ({ children, content, isOpen, setIsOpen }: PopOverTypes) => {
  return (
    <div className={styles.container}>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {isOpen && <div className={styles.content}>{content}</div>}
    </div>
  )
}
