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
  const FeatureCardElement = screen.getByTestId('feature-card');
  expect(FeatureCardElement).toBeInTheDocument();
});
test('feature card should has an icon of (<FiFilter/>)', () => {
  render(
    <FeatureCard
      icon={<FiFilter />}
      title="Filter"
      description="Filter your items to find the right information."
    />
  );
  const FeatureCardIcon = screen.getByTestId('feature-card-icon');
  expect(FeatureCardIcon).toBeTruthy();
});
test('feature card should has an title of (Filter)', () => {
  render(
    <FeatureCard
      icon={<FiFilter />}
      title="Filter"
      description="Filter your items to find the right information."
    />
  );
  const FeatureCardTitle = screen.getByTestId('feature-card-title');
  expect(FeatureCardTitle).toHaveTextContent('Filter');
});

test('feature card should has an paragraph of (Filter your items to find the right information.)', () => {
  render(
    <FeatureCard
      icon={<FiFilter />}
      title="Filter"
      description="Filter your items to find the right information."
    />
  );
  const FeatureCardParagraph = screen.getByTestId('feature-card-paragraph');
  expect(FeatureCardParagraph).toHaveTextContent(
    'Filter your items to find the right information.'
  );
});
