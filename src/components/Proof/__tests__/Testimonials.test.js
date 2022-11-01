import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';

test('should render testimonials component', () => {
    render(<Testimonials />);
    const TestimonialsElement= screen.getByTestId('testimonials-section');
    expect(TestimonialsElement).toBeInTheDocument();
});

test('testimonials section h2 should contain (What People are saying about us)', () => {
    render(<Testimonials />);
    const Testimonialstitle = screen.getByTestId('testimonials-title');
    expect(Testimonialstitle).toHaveTextContent('What People are saying about us');
});

test('testimonials section p should contain (Everything you need to know about our business and products anywhere on the planet.)', () => {
    render(<Testimonials />);
    const TestimonialsParagraph = screen.getByTestId('testimonials-paragraph');
    expect(TestimonialsParagraph).toHaveTextContent('Everything you need to know about our business and products anywhere on the planet.');
});

// test('testimonials section should contain 3 feature cards', () => {
//     render(<Testimonials />);
//     const TestimonialsCard = screen.getAllByTestId('testimonials-card');
//     expect(TestimonialsCard).toHaveLength(3);
// });