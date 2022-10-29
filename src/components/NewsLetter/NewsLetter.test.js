import React from "react";
import { render } from "@testing-library/react";
import NewsLetter from ".";


it('render correctly', () => {
    const { queryByPlaceholderText, getByText, queryByAltText} = render(<NewsLetter />)

    expect(queryByPlaceholderText('Write your email here')).toBeTruthy()
    expect(getByText('Subscribe to our newsletter and stay updated')).toBeTruthy()
    expect(queryByAltText('email')).toBeTruthy()
    expect(getByText("Subscribe to our Newsletter !")).toMatchSnapshot(`
    <h1 className='text-[20px] sm:text-[40px] mb-3 sm:mb-0'>Subscribe to our <br /> Newsletter !</h1>
  `);
})