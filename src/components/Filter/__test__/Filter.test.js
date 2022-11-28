import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../../app/store';
import FilterPage from '../../../Pages/FilterPage/FilterPage';


test('Filter Component Renders Correctly', () => {
  render(
    <Provider store={store}>
      <Router>
        <FilterPage />
      </Router>
    </Provider>
  );
  expect(screen.getByTestId('filter')).toMatchSnapshot();
});
