import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AddItemPage from './AddItemPage';
import { store } from '../../app/store';

test('Add item page rendered correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <AddItemPage />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId('add-item-page')).toMatchSnapshot()
})