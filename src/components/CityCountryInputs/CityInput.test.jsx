import { render, screen } from '@testing-library/react';
import CityInput from './CityInput';

test('City input rendered correctly', () => {
    render(<CityInput/>);
    expect(screen.getByTestId('city-input')).toMatchSnapshot();
})