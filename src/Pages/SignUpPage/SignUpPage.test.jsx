import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import SignUpPage from './SignUpPage';
import SignUp from '../../components/SignUp/SignUp';

test('Sign In Page Rendered Correctly', () => {
  render(
    <Provider store={store}>
      <Router>
        <SignUpPage>
          <SignUp />
        </SignUpPage>
      </Router>
    </Provider>
  );
  expect(screen.getByTestId('sign-up-page')).toMatchSnapshot();
});
