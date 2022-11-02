import React from "react";
import DiffSection from "../DiffSection";
import OverlapText from "./OverlapText";
import Button from "./Button";
import renderer from 'react-test-renderer'
//import { renderer } from "@testing-library/react";

test('DiffSection renders without crashing ', () => {
    const tree = renderer.create(
    <DiffSection>
      <OverlapText>
        <Button />
      </OverlapText>
    </DiffSection>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  
  });

//const Diff = require("../DiffSection");
// test("DiffSection renders without crashing " , () => {
//     const  = render(<DiffSection /> );
//     expect(comp).toBeTruthy();
//     expect(comp).toMatchSnapshot;
// })