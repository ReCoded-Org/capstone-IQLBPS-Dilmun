import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import { ComboBox } from '.'

const options = [
    'test',
    'test1',
    'test2',
];

test('ComboBox renders correctly', () => {
    const tree = renderer.create(<ComboBox options={options} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('should have a value', () => {
    render(<ComboBox value="test" options={options} />);
    const value = screen.getByDisplayValue(/test/i)
    expect(value).toBeTruthy();
})

test('should have a disabled', () => {
    render(<ComboBox disabled options={options} />);
    const input = screen.getByRole('combobox')
    expect(input).toBeDisabled();
})

