import { ReactNode } from "react"

import styles from "./ProductGrid.module.css"

type ProductGridTypes = {
    children: ReactNode
}

export const ProductGrid = ({ children }: ProductGridTypes) => {
    return <div className={styles.grid}>{children}</div>
}