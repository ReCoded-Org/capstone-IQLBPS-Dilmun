import { render, screen } from '@testing-library/react';
import EditItemModal from './EditItemModal'

test('Add item form component rendered correctly', () => {
    render(<EditItemModal/>);
    expect(screen.getByTestId('edit-item')).toMatchSnapshot()
})