import { render, screen } from '@testing-library/react';
import PartnersLogo from '../PartnersLogo';

test('should render costumerslogo component', () => {
    render(<PartnersLogo />);
    const CustomersLogoElement= screen.getByTestId('customerslogo-section');
    expect(CustomersLogoElement).toMatchSnapshot();
});