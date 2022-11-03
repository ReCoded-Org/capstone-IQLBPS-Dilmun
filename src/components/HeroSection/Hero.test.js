import React from "react";
import { render } from "@testing-library/react";
import Hero from ".";


it('render correctly', () => {
    const { queryByPlaceholderText, getByText, queryByAltText } = render( < Hero / > )
    expect(getByText('Welcome to Dilmun')).toBeTruthy()
    expect(getByText('Your Way to Get Quality Products!')).toBeTruthy()

})