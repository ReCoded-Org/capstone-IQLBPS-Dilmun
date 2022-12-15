import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';
import { people01 } from '../assets/FeedbackCardImages';

const MOCK_FEEDBACK = [
  {
    id: 'feedback-1',
    content: 'description',
    name: 'name',
    title: 'title',
    img: people01,
  },
];

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));

test('should render testimonials component', () => {

    render(<Testimonials feedback={MOCK_FEEDBACK} />);

  const TestimonialsElement = screen.getByTestId('testimonials-section');
  expect(TestimonialsElement).toMatchSnapshot();
});
