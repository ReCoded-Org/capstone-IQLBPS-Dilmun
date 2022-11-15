import { render, screen } from '@testing-library/react';
import AddItemPage from './AddItemPage';

test('Add item page rendered correctly', () => {
    render(<AddItemPage/>);
    expect(screen.getByTestId('add-item-page')).toMatchSnapshot()
})