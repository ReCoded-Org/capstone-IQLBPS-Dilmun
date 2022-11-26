import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
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
      email: 'email'
  }
};

test('render item cards correctly', () => {
  render(
    <Provider store={store}>
      <ItemsCard item={MOCK_ITEM_DATA} />
    </Provider>
  );
    
    expect(screen.getByTestId('item-card')).toMatchSnapshot()
});
