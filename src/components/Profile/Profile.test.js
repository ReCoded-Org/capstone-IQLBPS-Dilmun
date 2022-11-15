import React from 'react';
import { render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Profile from './Profile';


test('profile renders correctly', () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
});


     test('alt contains correct value', () => {
       render(<Profile/>)
       const testImage = document.querySelector("img") ;
       expect(testImage.alt).toContain("DefaultProfileImg")
     })


  test('should render a button ', () => {
    render(<Profile />);
    const button1 = document.querySelector("button");
    expect(button1).toBeInTheDocument();
  });

 