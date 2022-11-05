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

it("redering list correctly", () => {
    const { list } = renderer.create(
        <Router>
            <list />
        </Router>).toJSON();
    expect(list).toMatchSnapshot();
})

it("redering button correctly", () => {
    const { Button } = renderer.create(
        <Router>
            <list >
                <Button />
            </list>
        </Router>).toJSON();
    expect(Button).toMatchSnapshot();
})