import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ItemDetailsPage from './ItemDetailsPage';
import { store } from '../../app/store';

test('Sort the Products', () => {
    const tree = render(<Provider store={store}><ItemDetailsPage /></Provider>);
    expect(tree).toMatchSnapshot();
});
