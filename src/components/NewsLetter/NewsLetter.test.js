import React from "react";
import { render } from "@testing-library/react";
import NewsLetter from ".";



it('render correctly', () => {
    const { queryByPlaceholderText } = render(<NewsLetter />)

    expect(queryByPlaceholderText('Write your email here')).toBeTruthy()
})