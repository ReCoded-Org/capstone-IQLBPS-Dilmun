import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import { Input } from '.'

test('Input renders correctly', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('should have a value', () => {
    render(<Input value="test" />);
    const value = screen.getByDisplayValue(/test/i)
    expect(value).toBeTruthy();
})

test('should have a disabled', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled();
})

test('should have a error', () => {
    render(<Input errors />);
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('error');
})

test('should have a className', () => {
    render(<Input className="test" />);
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('test');
})

test('should have a style', () => {
    render(<Input style={{ color: 'red' }} />);
    const input = screen.getByRole('textbox')
    expect(input).toHaveStyle('color: red');
})

test('should have a id', () => {
    render(<Input id="test" />);
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('id', 'test');
})

test('should have a type', () => {
    render(<Input type="number" />);
    const input = screen.getByRole('spinbutton')
    expect(input).toHaveAttribute('type', 'number');
})

test('should have a placeholder', () => {
    render(<Input placeholder="test" />);
    const input = screen.getByPlaceholderText(/test/i)
    expect(input).toBeTruthy();
})

test('should have a label', () => {
    render(<Input>test</Input>);
    const input = screen.getByText(/test/i)
    expect(input).toBeTruthy();
})
