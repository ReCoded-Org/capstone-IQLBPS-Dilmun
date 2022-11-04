import { render, screen } from '@testing-library/react';
import PartnersLogo from '../PartnersLogo';

test('should render costumerslogo component', () => {
    render(<PartnersLogo />);
    const CustomersLogoElement= screen.getByTestId('customerslogo-section');
    expect(CustomersLogoElement).toBeInTheDocument();
});

test('costumerslogo section h2 should contain (Our Partners)', () => {
    render(<PartnersLogo />);
    const CustomersLogoTitle = screen.getByTestId('costumerslogo-title');
    expect(CustomersLogoTitle).toHaveTextContent('Our Partners');
});