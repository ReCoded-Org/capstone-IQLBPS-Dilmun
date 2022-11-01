import { render, screen } from '@testing-library/react';
import FeedbackCard from '../FeedbackCard';

test('should render feedbackCard component', () => {
    render(<FeedbackCard />);
    const FeedbackCardElement= screen.getByTestId('feedbackcard-div');
    expect(FeedbackCardElement).toBeInTheDocument();
});

// test('if feedbackcard content prop is passed, render the content', () => {
//     render(<FeedbackCard />);
//     const FeedbackContent = screen.getByTestId('feedback-card-content');
//     expect(FeedbackContent).toHaveTextContent('I\'ve made multiple purchases and every single one has been great! The selection they offer is so varied I could spend hours looking through all the items.');
// });

// test('feature card should has a name', () => {
//     render(<FeedbackCard />);
//     const FeedbackName = screen.getByTestId('feedback-card-name');
//     expect(FeedbackName).toBeTruthy();
// });

// test('feature card should has a title', () => {
//     render(<FeedbackCard />);
//     const FeedbackTitle = screen.getByTestId('feedback-card-title');
//     expect(FeedbackTitle).toBeTruthy();
// });