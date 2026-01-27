import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import * as utils from '@/lib/utils'

// Mock utils
jest.mock('@/lib/utils', () => ({
  ...jest.requireActual('@/lib/utils'),
  getPlatform: jest.fn(),
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileInView, whileHover, viewport, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, whileInView, whileHover, viewport, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, whileInView, whileHover, viewport, ...props }: any) => <p {...props}>{children}</p>,
    section: ({ children, whileInView, whileHover, viewport, ...props }: any) => <section {...props}>{children}</section>,
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
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the title', () => {
    ;(utils.getPlatform as jest.Mock).mockReturnValue('chrome')
    render(<Home />)
    const title = screen.getByRole('heading', { name: /Browse with Intention/i, level: 1 })
    expect(title).toBeInTheDocument()
  })

  it('renders the Add to Chrome button when on chrome', () => {
    ;(utils.getPlatform as jest.Mock).mockReturnValue('chrome')
    render(<Home />)
    const buttons = screen.getAllByText(/Add to Chrome/i)
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('renders the Android buttons when on android', () => {
    ;(utils.getPlatform as jest.Mock).mockReturnValue('android')
    render(<Home />)
    const buttons = screen.getAllByText(/Android/i)
    expect(buttons.length).toBeGreaterThan(0)
  })
})