import { render, screen } from '@testing-library/react';
import FeedbackCard from '../FeedbackCard';

test('should render feedbackCard component', () => {
    render(<FeedbackCard />);
    const FeedbackCardElement= screen.getByTestId('feedbackcard-div');
    expect(FeedbackCardElement).toBeInTheDocument();
});

const feedback = {
      id: "feedback-1",
      content:
        "I've made multiple purchases and every single one has been great! The selection they offer is so varied I could spend hours looking through all the items.",
      name: "Herman Jensen",
      title: "Client",
};