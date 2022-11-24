import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import ItemCard from './ItemCard';

test('Sign In Page Renders Correctly', () => {
  render(
    <Provider store={store}>
      <ItemCard />
    </Provider>
  );
  expect(screen.getByTestId('item-card')).toMatchSnapshot();
});
