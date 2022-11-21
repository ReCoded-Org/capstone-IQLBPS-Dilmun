import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import Profile from '../../components/Profile/Profile';


test('Profile Page Rendered Correctly', () => {
    render(
      <Router>
      <ProfilePage>
        <Profile />
      </ProfilePage>
      </Router>
    );
    expect(screen.getByTestId('Profile-page')).toMatchSnapshot();
  });
  