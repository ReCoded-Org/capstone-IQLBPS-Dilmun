import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddItemForm from './AddItemForm';
import { store } from '../../app/store';

test('Add item form component rendered correctly', () => {
    render(
      <Provider store={store}>
        <AddItemForm />
      </Provider>
    );
    expect(screen.getByTestId('add-item-form')).toMatchSnapshot()
})