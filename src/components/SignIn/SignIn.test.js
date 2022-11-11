import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from './SignIn';

test('Sign In Page Renders Correctly', () => {
  render(
    <Router>
      <SignIn />
    </Router>
  );
  expect(screen.getByTestId('sign-in')).toMatchSnapshot();
});
