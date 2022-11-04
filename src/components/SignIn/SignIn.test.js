import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from './SignIn';

test('render inputs correctly', () => {
  render(
    <Router>
      <SignIn />
    </Router>
  );
  expect(screen.getByTestId('sign-in')).toMatchSnapshot();
});
