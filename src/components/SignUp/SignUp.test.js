import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';
import { store } from '../../app/store';

test('Sign Up Page Renders Correctly', () => {
  render(
    <Provider store={store}>
      <Router>
        <SignUp />
      </Router>
    </Provider>
  );
  expect(screen.getByTestId('sign-up')).toMatchSnapshot();
});
