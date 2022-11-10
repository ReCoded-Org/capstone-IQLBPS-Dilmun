
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Filter from '../Filter';

test('Sign In Page Renders Correctly', () => {
  render(
    <Router>
      <Filter />
    </Router>
  );
  expect(screen.getByTestId('filter')).toMatchSnapshot();
});
