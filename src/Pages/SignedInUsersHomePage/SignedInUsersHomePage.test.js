import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import ImageSlider from './ImageSlider'
import SignedInUsersHomePage from "./SignedInUsersHomePage";

test('SignedInUsersHomePage renders without crashing', () => {
  render(
    <Provider store={store}>
      <Router>
        <SignedInUsersHomePage>
          <ImageSlider />
        </SignedInUsersHomePage>
      </Router>
    </Provider>
  );
  expect(screen.getByTestId('SignedInUseresHomePage')).toMatchSnapshot();
});

