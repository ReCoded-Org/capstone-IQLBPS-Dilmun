import { render, screen } from '@testing-library/react';
import { FiFilter } from 'react-icons/fi';
import FeatureCard from '../FeatureCard';

test('feature card should be render', () => {
  render(
    <FeatureCard
      icon={<FiFilter />}
      title="Filter"
      description="Filter your items to find the right information."
    />
  );

  expect(screen.getByTestId('feature-card')).toMatchSnapshot();
});
