import React from "react";
import renderer from "react-test-renderer";
// import { BrowserRouter as Router } from "react-router-dom"
import AboutUS from "./AboutUs";
import MemberCard from "./MemberCard";
import AboutUsHeader from './AboutUsHeader';

test("redering AboutUS", () => {
    const tree = renderer.create(
        <AboutUS />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

it('should render cards', () => {

    const tree = renderer.create(

        <AboutUS><MemberCard /></AboutUS>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render cards', () => {

    const tree2 = renderer.create(

        <AboutUS><AboutUsHeader /></AboutUS>
    ).toJSON();
    expect(tree2).toMatchSnapshot();
});
