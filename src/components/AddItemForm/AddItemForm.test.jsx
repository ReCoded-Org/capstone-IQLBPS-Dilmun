import { render, screen } from '@testing-library/react';
import AddItemForm from './AddItemForm';

test('Add item form component rendered correctly', () => {
    render(<AddItemForm/>);
    expect(screen.getByTestId('add-item-form')).toMatchSnapshot()
})