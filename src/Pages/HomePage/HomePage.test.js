import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));

test('Home Page Rendered Correctly', () => {
    render(
        <Router>
            <HomePage />
        </Router>
    );
    expect(screen.getByTestId('home-page')).toMatchSnapshot();
});
