import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import SignIn from './SignIn';

test('Sign In Page Renders Correctly', () => {
  render(
    <Provider store={store}>
      <Router>
        <SignIn />
      </Router>
    </Provider>
  );
  expect(screen.getByTestId('sign-in')).toMatchSnapshot();
});
