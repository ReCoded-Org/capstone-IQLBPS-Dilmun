import { render, screen } from '@testing-library/react';
import Features from '../Features';

test('should render features component ', () => {
    render(<Features />);
    const FeaturesElement = screen.getByTestId('features-section');
    expect(FeaturesElement).toBeInTheDocument();

});

test('feature section h2 should contain (Designed for your needs and kind) ', () => {
  render(<Features />);
  const FeaturesTitle = screen.getByTestId('features-title');
  expect(FeaturesTitle).toHaveTextContent('Designed for your needs and kind');
});
test('feature section p should contain (Here at Dilmun we focus on joining people together and help those people that are in need.) ', () => {
  render(<Features />);
  const FeaturesParagraph = screen.getByTestId('features-paragraph');
  expect(FeaturesParagraph).toHaveTextContent('Here at Dilmun we focus on joining people together and help those people that are in need.');
});

test('feature section should contain 3 feature cards', () => {
  render(<Features />);
  const FeaturesCards = screen.getAllByTestId('feature-card');
  expect(FeaturesCards).toHaveLength(3);
});
