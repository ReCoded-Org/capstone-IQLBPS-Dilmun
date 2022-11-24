import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import ItemCard from './ItemCard';
import ItemCardSection from './ItemCardSection';

test('Sign In Page Renders Correctly', () => {
  render(
    <Provider store={store}>
      <ItemCardSection>
        <ItemCard />
      </ItemCardSection>
    </Provider>
  );
  expect(screen.getByTestId('item-card')).toMatchSnapshot();
});
