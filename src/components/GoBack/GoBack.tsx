'use client'

import { getLanguages } from '@/dictionaries'
import { useRouter } from 'next/navigation'
import { FiArrowLeftCircle } from 'react-icons/fi'

import styles from './GoBack.module.css'

export const GoBack = () => {
  const router = useRouter()
  const t = getLanguages()

  return (
    <div className={styles.container} onClick={() => router.back()}>
      <FiArrowLeftCircle className={styles.icon} />
      <span>{t.go_back}</span>
    </div>
  )
}
