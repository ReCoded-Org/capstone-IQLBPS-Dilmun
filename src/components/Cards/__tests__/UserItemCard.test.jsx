import { Provider } from 'react-redux';
import { store } from '../../../app/store';

import UserItemCard from '../UserItemCard';

const MOCK_ITEM = {
  title: 'Title of Item Goes Here',
  file: 'https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  description: 'Description of item Here...',
  price: 110,
  type: 'Item Type',
  categories: ['Men', 'Women', 'Kids'],
};

describe('UserItemCard', () => {
  it('renders correctly', () => {
    <Provider store={store}>
    const tree = renderer.create(<UserItemCard item={MOCK_ITEM} />).toJSON();
    expect(tree).toMatchSnapshot();
    </Provider>
  });
});
