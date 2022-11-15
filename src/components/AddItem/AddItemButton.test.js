import React from "react";
import { render } from "@testing-library/react";
import AddItemButton from "./AddItemButton.jsx";

test('Add item button component rendered correctly', () => {
    render( < AddItemButton / > );
    expect(screen.getByTestId('add-item-button')).toMatchSnapshot()
})