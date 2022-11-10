import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import { TextArea } from '.'

test('TextArea renders correctly', () => {
    const tree = renderer.create(<TextArea />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('should have a disabled', () => {
    render(<TextArea disabled />);
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled();
})

test('should have a error', () => {
    render(<TextArea errors />);
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('error');
})

test('should have a className', () => {
    render(<TextArea className="test" />);
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('test');
})

test('should have a style', () => {
    render(<TextArea style={{ color: 'red' }} />);
    const input = screen.getByRole('textbox')
    expect(input).toHaveStyle('color: red');
})

test('should have a id', () => {
    render(<TextArea id="test" />);
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('id', 'test');
})