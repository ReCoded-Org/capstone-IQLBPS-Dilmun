import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp'

test('Sign Up Page Renders Correctly', () => {
  render(
    <Router>
      <SignUp />
    </Router>
  );
  expect(screen.getByTestId('sign-up')).toMatchSnapshot();
});