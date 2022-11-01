import { render, screen } from '@testing-library/react';
import CostumersLogo from '../CostumersLogo';

test('should render costumerslogo component', () => {
    render(<CostumersLogo />);
    const CustomersLogoElement= screen.getByTestId('customerslogo-section');
    expect(CustomersLogoElement).toBeInTheDocument();
});

test('costumerslogo section h2 should contain (What People are saying about us)', () => {
    render(<CostumersLogo />);
    const CustomersLogoTitle = screen.getByTestId('costumerslogo-title');
    expect(CustomersLogoTitle).toHaveTextContent('You’ll be in good company');
});