import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../../app/store'
import ProfilePage from './ProfilePage';
import Profile from '../../components/Profile/Profile';

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
    country:'user', city:'user'
  },
  email:'user@user.user'
}

test('Profile Page Rendered Correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProfilePage>
            <Profile userItem={MOCK_USER_ITEM} userData={MOCK_USER_DATA } />
          </ProfilePage>
        </Router>
      </Provider>
    );
    expect(screen.getByTestId('profile-page')).toMatchSnapshot();
  });
  