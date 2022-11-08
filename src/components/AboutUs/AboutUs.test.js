import React from "react";
import renderer from "react-test-renderer";
// import { BrowserRouter as Router } from "react-router-dom"
import AboutUS from "./AboutUs";
import MemberCard from "./MemberCard";

test("redering AboutUS", () => {
    const tree = renderer.create(
        <AboutUS />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

it('should render cards', () => {
    // const books = ['Harry Potter', 'The Lord of the Rings']
    const elem = renderer.create(

        <AboutUS><MemberCard /></AboutUS>
    ).toJSON();
    expect(elem).toMatchSnapshot();
});

