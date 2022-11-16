import React from 'react';
import { render } from '@testing-library/react';
import ItemDetailsPage from './ItemDetailsPage';

test('Sort the Products', () => {
    const tree = render(<ItemDetailsPage />);
    expect(tree).toMatchSnapshot();
});
