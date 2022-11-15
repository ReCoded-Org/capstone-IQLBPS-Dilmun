import React from "react";
import { render } from "@testing-library/react";
import AddItemButton from "./AddItemButton.jsx";

it('render correctly', () => {
    const { queryByPlaceholderText, getByText, queryByAltText } = render( < AddItemButton / > )
    expect(getByText('Welcome to Dilmun')).toBeTruthy()
    expect(getByText('Your Way to Get Quality Products!')).toBeTruthy()

})