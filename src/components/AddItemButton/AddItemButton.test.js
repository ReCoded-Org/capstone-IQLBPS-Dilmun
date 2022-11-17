import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import AddItemButton from "./AddItemButton";


test('Add item button component rendered correctly', () => {
    const component = renderer.create(<BrowserRouter><AddItemButton /></BrowserRouter>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})