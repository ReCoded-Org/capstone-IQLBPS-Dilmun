import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import {store} from '../../app/store'
import ProfilePage from './ProfilePage';
import Profile from '../../components/Profile/Profile';


afterEach(cleanup)

test('Profile Page Rendered Correctly', async() => {
  await act(() => 
    render(
      <Provider store={store}>
        <Router>
          <ProfilePage>
            <Profile />
          </ProfilePage>
        </Router>
      </Provider>
    ) )
    expect(screen.getByTestId('profile-page')).toMatchSnapshot();
  });
 