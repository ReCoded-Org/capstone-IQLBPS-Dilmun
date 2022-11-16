import { render, screen } from '@testing-library/react';
import ItemsDisplay from '../ItemsDisplay';

test('should render feedbackCard component', () => {
    render(<ItemsDisplay />);
    const FeedbackCardElement= screen.getByTestId('itemsdisplay-div');
    expect(FeedbackCardElement).toBeInTheDocument();
});
