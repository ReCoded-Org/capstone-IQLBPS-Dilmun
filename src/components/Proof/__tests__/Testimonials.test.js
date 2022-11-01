import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';

test('should render features component ', () => {
    render(<Testimonials />);
    // const FeaturesElement = screen.getByTestId('features-section');
    // expect(FeaturesElement).toBeInTheDocument();
});