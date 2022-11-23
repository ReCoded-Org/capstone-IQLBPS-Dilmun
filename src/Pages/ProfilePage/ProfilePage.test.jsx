import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../../app/store'
import ProfilePage from './ProfilePage';
import Profile from '../../components/Profile/Profile';


test('Profile Page Rendered Correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProfilePage>
            <Profile />
          </ProfilePage>
        </Router>
      </Provider>
    );
    expect(screen.getByTestId('profile-page')).toMatchSnapshot();
  });
  