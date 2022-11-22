import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AddItemForm from './AddItemForm';
import { store } from '../../app/store';

test('Add item form component rendered correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <AddItemForm />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId('add-item-form')).toMatchSnapshot()
})