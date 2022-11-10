
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FilterPage from '../../../Pages/FilterPage/FilterPage'

test('Filter Component Renders Correctly', () => {
  render(
    <Router>
      <FilterPage />
    </Router>
  );
  expect(screen.getByTestId('filter')).toMatchSnapshot();
});
