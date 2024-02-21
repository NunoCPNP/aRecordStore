import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import { GoBack } from '../GoBack'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('GoBack', () => {
  test('renders the component', () => {
    useRouter.mockReturnValueOnce({ back: jest.fn() })

    render(<GoBack />)

    expect(screen.getByText('Voltar')).toBeInTheDocument()
  })

  test('calls router.back() when clicked', () => {
    const mockBack = jest.fn()
    useRouter.mockReturnValueOnce({ back: mockBack })

    render(<GoBack />)

    fireEvent.click(screen.getByText('Voltar'))

    expect(mockBack).toHaveBeenCalledTimes(1)
  })
})
