import React from 'react';
import { render , screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../../app/store'
import Profile from './Profile';


test('Profile Rendered Correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId('profile')).toMatchSnapshot();
  });


// test('profile renders correctly', () => {
//     const tree = renderer.create(<Profile />).toJSON();
//     expect(tree).toMatchSnapshot();
// });


//      test('alt contains correct value', () => {
//        render(<Profile/>)
//        const testImage = document.querySelector("img") ;
//        expect(testImage.alt).toContain("DefaultProfileImg")
//      })


//   test('should render a button ', () => {
//     render(<Profile />);
//     const button1 = document.querySelector("button");
//     expect(button1).toBeInTheDocument();
//   });

 