import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import { SubmitButton } from '.'

test('SubmitButton renders correctly', () => {
    const tree = renderer.create(<SubmitButton />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('should have a disabled', () => {
    render(<SubmitButton disabled />);
    const input = screen.getByRole('button')
    expect(input).toBeDisabled();
})

test('should have a className', () => {
    render(<SubmitButton className="test" />);
    const input = screen.getByRole('button')
    expect(input).toHaveClass('test');
})

test('should have a style', () => {
    render(<SubmitButton style={{ color: 'red' }} />);
    const input = screen.getByRole('button')
    expect(input).toHaveStyle('color: red');
})

test('should have a id', () => {
    render(<SubmitButton id="test" />);
    const input = screen.getByRole('button')
    expect(input).toHaveAttribute('id', 'test');
})

test('should have a type', () => {
    render(<SubmitButton type="number" />);
    const input = screen.getByRole('button')
    expect(input).toHaveAttribute('type', 'number');
})

test('should have a onClick', () => {
    const onClick = jest.fn();
    render(<SubmitButton onClick={onClick} />);
    const input = screen.getByRole('button')
    input.click();
    expect(onClick).toHaveBeenCalled();
})

test('should have a text', () => {
    render(<SubmitButton buttonText='test' />);
    const input = screen.getByRole('button')
    expect(input).toHaveTextContent('test');
})
