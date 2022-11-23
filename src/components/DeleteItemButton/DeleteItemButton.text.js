import React from "react";
import renderer from "react-test-renderer";

import DeleteItemButton from "./DeleteItemButton";


test('Delete item button component rendered correctly', () => {
            const component = renderer.create( < BrowserRouter > < DeleteItemButton / > < /BrowserRouter>);
                const tree = component.toJSON(); expect(tree).toMatchSnapshot();
            })