'use client'

import { useState, useEffect, useRef } from 'react'

import type { DrawerTypes } from './Drawer.types'

import styles from './Drawer.module.scss'

export const Drawer = ({ touchPoint, content }: DrawerTypes) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleOutsideClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  })

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>{touchPoint}</div>
      {isOpen ? (
        <div ref={ref} className={styles.container}>
          {content}
        </div>
      ) : null}
    </>
  )
}
