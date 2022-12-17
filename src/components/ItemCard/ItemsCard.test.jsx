import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ItemsCard from './ItemsCard';
import { store } from '../../app/store';

const MOCK_ITEM_DATA = {
  title: 'Title',
  file: 'https://cdn.discordapp.com/attachments/1031834305703460906/1041710013992947812/image.png',
  description: 'Description',
  price: 110,
  type: 'Item Type',
  categories: ['Men'],
  owner: {
    email: 'email',
  },
};
afterEach(cleanup);

test('render item cards correctly', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ItemsCard item={MOCK_ITEM_DATA} />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId('item-card')).toMatchSnapshot();
});
