import React from "react";
import renderer from 'react-test-renderer';
import Profile from "./Profile";


test('profile renders correctly', () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Renders with a className', () => {
    const { container } = renderer.create(<Profile />);
    expect((container.firstChild.classList).toHaveClass("rounded-full w-36"))

})