import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

test("redering footer", () => {
    const tree = renderer.create(<Router>
        <Footer />
    </Router>).toJSON();
    expect(tree).toMatchSnapshot();
})

it("redering divs correctly correctly", () => {
    const { divs } = renderer.create(
        <Router>
            <div />
            <div />
            <div />
        </Router>).toJSON();
    expect(divs).toMatchSnapshot();
})

