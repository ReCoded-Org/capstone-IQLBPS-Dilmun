import React from "react";
import OverlapText from "./OverlapText";
import DiffSection from "../DiffSection";
import renderer from 'react-test-renderer'


test('DiffSection renders without crashing ', () => {
    const tree = renderer.create(
    <DiffSection>
      <OverlapText />
    </DiffSection>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  
  });
