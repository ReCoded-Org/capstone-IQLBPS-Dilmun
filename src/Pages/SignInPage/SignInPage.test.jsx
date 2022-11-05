import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignInPage from './SignInPage';
import SignIn from '../../components/SignIn/SignIn';

test('Sign In Page Rendered Correctly', () => {
  render(
    <Router>
    <SignInPage>
      <SignIn />
    </SignInPage>
    </Router>
  );
  expect(screen.getByTestId('sign-in-page')).toMatchSnapshot();
});
