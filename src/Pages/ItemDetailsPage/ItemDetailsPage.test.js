import { render, screen } from '@testing-library/react';

import ItemDetailsPage from './ItemDetailsPage';


test('ItemDetailsPage Page Rendered Correctly', () => {
    render(
        <ItemDetailsPage />
    );
    expect(screen.getByTestId('item-details-page')).toMatchSnapshot();
});
