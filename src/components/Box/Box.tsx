import { ElementType, ReactNode } from 'react'

type BoxTypes = {
  children: ReactNode
  pt?: number
  as?: ElementType
  pr?: number
  pb?: number
  pl?: number
}

export const Box = ({ children, as, pt, pr, pb, pl }: BoxTypes) => {
  const Component = as ? as : 'div'

  return (
    <Component
      style={{
        paddingTop: `${pt}rem`,
        paddingRight: `${pr}rem`,
        paddingBottom: `${pb}rem`,
        paddingLeft: `${pl}rem`,
      }}
    >
      {children}
    </Component>
  )
}
