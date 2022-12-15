import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';


test('Home Page Rendered Correctly', () => {
    render(
        <Router>
            <HomePage />
        </Router>
    );
    expect(screen.getByTestId('home-page')).toMatchSnapshot();
});
