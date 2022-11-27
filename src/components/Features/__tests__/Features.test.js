import { render, screen } from '@testing-library/react';
import Features from '../Features';

test('should render features component ', () => {
  render(<Features />);
  expect(screen.getByTestId('features-section')).toMatchSnapshot();
});
