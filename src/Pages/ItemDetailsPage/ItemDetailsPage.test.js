import { render } from '@testing-library/react';
import ItemDetailsPage from './ItemDetailsPage';

test('ItemDetailsPage Page Rendered Correctly', () => {
    const tree = render(<ItemDetailsPage />);
  expect(tree).toMatchSnapshot();
});
