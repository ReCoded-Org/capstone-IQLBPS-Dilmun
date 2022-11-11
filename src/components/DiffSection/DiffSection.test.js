import React from "react";
import renderer from 'react-test-renderer'
import OverlapText from "./OverlapText";
import DiffSection from "./DiffSection";


test('DiffSection renders without crashing ', () => {
    const tree = renderer.create(
    <DiffSection>
      <OverlapText />
    </DiffSection>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  
  });
