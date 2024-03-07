'use client'

import { useRouter } from 'next/navigation'
import { getLanguages } from '@/dictionaries'
import { FiArrowLeftCircle } from 'react-icons/fi'

import styles from './GoBack.module.scss'

export const GoBack = () => {
  const router = useRouter()
  const t = getLanguages()

  return (
    <button className={styles.container} onClick={() => router.back()}>
      <FiArrowLeftCircle className={styles.icon} />
      <span>{t.go_back}</span>
    </button>
  )
}
