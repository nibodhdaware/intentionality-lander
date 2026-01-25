import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
  useScroll: () => ({ scrollYProgress: 0 }),
  useTransform: () => 0,
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('Home', () => {
  it('renders the title', () => {
    render(<Home />)
    const title = screen.getByRole('heading', { name: /Browse with Intention/i, level: 1 })
    expect(title).toBeInTheDocument()
  })

  it('renders the Add to Chrome button', () => {
    render(<Home />)
    const buttons = screen.getAllByText(/Add to Chrome/i)
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('renders the Android button', () => {
    render(<Home />)
    const button = screen.getByText(/Get on Android/i)
    expect(button).toBeInTheDocument()
  })
})