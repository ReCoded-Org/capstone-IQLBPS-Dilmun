import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import ItemCardSection from './ItemCardSection';
import ItemsCard from './ItemsCard';

test('Render Item Card Section correctly', async () => {
  render(
    <Provider store={store}>
      <ItemCardSection>
        <ItemsCard />
      </ItemCardSection>
    </Provider>
  );
  const items = await expect(screen.getByTestId('item-card'));
  expect(items).toMatchSnapshot();
});
