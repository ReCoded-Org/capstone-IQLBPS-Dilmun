import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import SignInPage from './SignInPage';
import SignIn from '../../components/SignIn/SignIn';

test('Sign In Page Rendered Correctly', () => {
  render(
    <Provider store={store}>
      <Router>
        <SignInPage>
          <SignIn />
        </SignInPage>
      </Router>
    </Provider>
  );
  expect(screen.getByTestId('sign-in-page')).toMatchSnapshot();
});
