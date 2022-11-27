import { render, screen } from '@testing-library/react';
import ItemsDisplay from '../ItemsDisplay';

test('should render feedbackCard component', () => {
  render(<ItemsDisplay />);
  expect(screen.getByTestId('itemsdisplay-div')).toMatchSnapshot();
});
