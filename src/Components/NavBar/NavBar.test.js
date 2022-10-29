import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";



test('render correctly', () => {
    const tree = render(<NavBar />);
    expect(tree).toMatchSnapshot()
})