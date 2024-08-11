import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'
import HelloWorld from '../lib/HelloWorld.svelte'

describe('HelloWorld', () => {
    it('renders Hello, World!', () => {
        render(HelloWorld)

        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toHaveTextContent('Hello, World!')
    })

    it('is within a div', () => {
        const { container } = render(HelloWorld)

        const div = container.querySelector('div')
        expect(div).toBeInTheDocument()
        expect(div).toContainElement(screen.getByText('Hello, World!'))
    })
})