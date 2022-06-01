import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(
    'Software Practice Empirical Evidence Database (SPEED)'
  )
  expect(linkElement).toBeInTheDocument()
})
