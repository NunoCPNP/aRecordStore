import type { BoxTypes } from './Box.types'

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
