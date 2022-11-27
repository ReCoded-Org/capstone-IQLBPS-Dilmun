import { render, screen } from '@testing-library/react';
import FeedbackCard from '../FeedbackCard';

test('should render feedbackCard component', () => {
    render(<FeedbackCard />);
    const FeedbackCardElement= screen.getByTestId('feedbackcard-div');
    expect(FeedbackCardElement).toMatchSnapshot();
});

