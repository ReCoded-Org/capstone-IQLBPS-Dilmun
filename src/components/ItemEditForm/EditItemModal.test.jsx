import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import EditItemModal from './EditItemModal';
import { store } from '../../app/store';

const MOCK_ITEM = {
  title: 'Title of Item Goes Here',
  file: 'https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  description: 'Description of item Here...',
  price: 110,
  type: 'Item Type',
  categories: ['Men', 'Women', 'Kids'],
};

test('Add item form component rendered correctly', () => {
  render(
    <Provider store={store}>
      <EditItemModal item={MOCK_ITEM} />
    </Provider>
  );
  expect(screen.getByTestId('edit-item')).toMatchSnapshot();
});
