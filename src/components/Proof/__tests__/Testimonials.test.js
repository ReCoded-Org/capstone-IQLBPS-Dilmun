import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';

test('should render testimonials component', () => {
    render(<Testimonials />);
    const TestimonialsElement= screen.getByTestId('testimonials-section');
    expect(TestimonialsElement).toMatchSnapshot();
});