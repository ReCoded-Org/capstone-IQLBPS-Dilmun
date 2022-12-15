import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';
import { people01, people02 } from '../assets/FeedbackCardImages';

const MOCK_FEEDBACK = [
  {
    id: 'feedback-1',
    content: 'description',
    name: 'name',
    title: 'title',
    img: people01,
  },
  {
    id: 'feedback-2',
    content: 'description',
    name: 'name',
    title: 'title',
    img: people02,
  },
];
test('should render testimonials component', () => {
    render(<Testimonials feedback={ MOCK_FEEDBACK} />);
    const TestimonialsElement= screen.getByTestId('testimonials-section');
    expect(TestimonialsElement).toMatchSnapshot();
});