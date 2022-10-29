import React from "react";
import { render } from "@testing-library/react";
import NewsLetter from "../components/NewsLetter";


it('render correctly', () => {
    const { queryByPlaceholderText } = render(<NewsLetter />)

    expect(queryByPlaceholderText('Write your email here')).toBeTruthy()
})