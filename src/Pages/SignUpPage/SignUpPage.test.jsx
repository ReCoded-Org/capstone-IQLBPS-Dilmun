import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import SignUp from '../../components/SignUp/SignUp';

test('Sign In Page Rendered Correctly', () => {
  render(
    <Router>
    <SignUpPage>
      <SignUp />
    </SignUpPage>
    </Router>
  );
  expect(screen.getByTestId('sign-up-page')).toMatchSnapshot();
});