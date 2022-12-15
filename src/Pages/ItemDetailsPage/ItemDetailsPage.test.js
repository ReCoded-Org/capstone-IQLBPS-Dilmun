import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
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

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});


afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
test('Sort the Products', async () => {
 await act(() => {
    render(
      <Provider store={store}>
        <ItemDetailsPage item={MOCK_ITEM_DATA} isItemLoading={false} />
      </Provider>
    );
  });
  expect(screen.getByTestId('item-details-page')).toMatchSnapshot();
});
