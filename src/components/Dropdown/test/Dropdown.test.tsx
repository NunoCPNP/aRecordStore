import { render, fireEvent } from '@testing-library/react'
import { Dropdown } from '../Dropdown'

test('dropdown panel should not be visible initially', () => {
  const { queryByTestId } = render(<Dropdown />)
  const panel = queryByTestId('dropdown-panel')

  expect(panel).toBeNull()
})

test('dropdown panel should be visible on click', () => {
  const { getByTestId } = render(<Dropdown />)
  const trigger = getByTestId('dropdown-trigger')

  fireEvent.click(trigger)

  const panel = getByTestId('dropdown-panel')

  expect(panel).toBeInTheDocument()
})

test('dropdown panel items should be rendered correctly', () => {
  const { getByTestId } = render(<Dropdown />)
  const trigger = getByTestId('dropdown-trigger')

  fireEvent.click(trigger)

  const newButton = getByTestId('dropdown-item-new')
  const ascButton = getByTestId('dropdown-item-price-asc')
  const dscButton = getByTestId('dropdown-item-price-dsc')
  const topButton = getByTestId('dropdown-item-top')

  expect(newButton).toBeInTheDocument()
  expect(ascButton).toBeInTheDocument()
  expect(dscButton).toBeInTheDocument()
  expect(topButton).toBeInTheDocument()
})
