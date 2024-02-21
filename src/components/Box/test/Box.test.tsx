import { render } from '@testing-library/react'
import { Box } from '../Box'

describe('Box component', () => {
  test('renders children', () => {
    const { getByText } = render(<Box>Test Content</Box>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  test('applies padding styles', () => {
    const { container } = render(
      <Box pt={2} pr={4} pb={6} pl={8}>
        Test Content
      </Box>,
    )
    const boxElement = container.firstChild
    expect(boxElement).toHaveStyle('padding-top: 2rem; padding-right: 4rem; padding-bottom: 6rem; padding-left: 8rem;')
  })

  test('renders as a different element type', () => {
    const { container } = render(<Box as="section">Test Content</Box>)
    const sectionElement = container.querySelector('section')
    expect(sectionElement).toBeInTheDocument()
  })

  test('renders as default element type', () => {
    const { container } = render(<Box>Test Content</Box>)
    const divElement = container.querySelector('div')
    expect(divElement).toBeInTheDocument()
  })
})
