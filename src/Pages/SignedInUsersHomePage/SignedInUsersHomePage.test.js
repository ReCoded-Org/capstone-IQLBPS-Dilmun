import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import SignedInUsersHomePage from "./SignedInUsersHomePage";
import ItemsCard from '../../components/ItemCard/ItemsCard';

test('SignedInUsersHomePage renders without crashing', () => {
  render(
    <Provider store={store}>
      <Router>
        <SignedInUsersHomePage>
          <ItemsCard />
        </SignedInUsersHomePage>
      </Router>
    </Provider>
  );
  expect(screen.getByTestId('SignedInUseresHomePage')).toMatchSnapshot();
});

