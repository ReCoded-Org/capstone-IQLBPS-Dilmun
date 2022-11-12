import { render, screen } from '@testing-library/react';
import CountryInput from './CountryInput';

test('Country input rendered correctly', () => {
    render(<CountryInput/>);
    expect(screen.getByTestId('country-input')).toMatchSnapshot();
})