import { render, screen } from '@testing-library/react'

import FAQ from '.'

describe("Testing FAQ component", () => {
    render(<FAQ />)

    it('should have a title', () => {
        expect(screen.findByText("Frequently Asked Questions"))
    })

    // it("should render an img with alt attribute", () => {
    //     const testImage = document.querySelector("img");
    //     expect(testImage.alt).toContain("frequently asked questions");
    // })


})