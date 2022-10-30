import React from "react";
import DiffSection from "../DiffSection";
import renderer from 'react-test-renderer'
//import { renderer } from "@testing-library/react";

test('DiffSection renders without crashing ', () => {
    const tree = renderer.create(<DiffSection />).toJSON();
    expect(tree).toMatchSnapshot();
  
  });

//const Diff = require("../DiffSection");
// test("DiffSection renders without crashing " , () => {
//     const  = render(<DiffSection /> );
//     expect(comp).toBeTruthy();
//     expect(comp).toMatchSnapshot;
// })