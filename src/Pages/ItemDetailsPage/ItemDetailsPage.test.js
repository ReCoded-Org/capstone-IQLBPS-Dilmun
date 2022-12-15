import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import ItemDetailsPage from './ItemDetailsPage';
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

test('Sort the Products', async () => {
  const tree = render(
    <Provider store={store}>
      <ItemDetailsPage item={MOCK_ITEM_DATA} />
    </Provider>
  );
  await act(() => tree);
  expect(tree).toMatchSnapshot();
});
