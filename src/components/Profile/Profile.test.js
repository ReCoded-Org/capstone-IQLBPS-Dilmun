import React from 'react';
import { render , screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../../app/store'
import Profile from './Profile';

const MOCK_USER_ITEM = {
  title: 'Title',
  file: 'https://cdn.discordapp.com/attachments/1031834305703460906/1041710013992947812/image.png',
  description: 'Description',
  price: 110,
  type: 'Item Type',
  categories: ['Men'],
  owner: {
    email: 'email',
  },
};
const MOCK_USER_DATA = {
  firstName: 'user',
  lastName: 'user',
  address: {
    country: 'user',
    city: 'user',
  },
  email: 'user@user.user',
};

afterEach(cleanup);

test('Profile Rendered Correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <Profile userItem={MOCK_USER_ITEM} userData={MOCK_USER_DATA} />
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

 