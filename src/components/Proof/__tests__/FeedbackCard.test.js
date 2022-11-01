import { render, screen } from '@testing-library/react';
import FeedbackCard from '../FeedbackCard';

test('should render feedbackCard component', () => {
    render(<FeedbackCard />);
    const FeedbackCardElement= screen.getByTestId('feedbackcard-div');
    expect(FeedbackCardElement).toBeInTheDocument();
});

// test('feedbackCard section h2 should contain (You’ll be in good company)', () => {
//     render(<FeedbackCard />);
//     const FeedbackCardTitle = screen.getByTestId('costumerslogo-title');
//     expect(FeedbackCardTitle).toHaveTextContent('You’ll be in good company');
// });