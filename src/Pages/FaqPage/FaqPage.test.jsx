import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FAQ from './FaqPage'

test('FAQ renders correctly', () => {
    const tree = renderer.create(<FAQ />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('should have a title', () => {
    render(<FAQ />);

    const title = screen.getByRole('heading', {
        name: /frequently asked questions/i
    })
    expect(title).toBeTruthy();
});

test('should have an image on the right of screen', () => {
    render(<FAQ />);

    const img = screen.getByRole('img', {
        name: /frequently asked questions/i
    })
    expect(img).toBeTruthy();
});

test('should have a question', () => {
    render(<FAQ />);

    const question = screen.getByText(/Can I cancel my order?/i)
    expect(question).toBeTruthy();
})

test('should have a answer', async () => {
    render(<FAQ />);

    const btn = screen.getByRole('button', {
        name: /can i cancel my order/i
    })
    userEvent.click(btn)

    const answer = await screen.findByText(/you can cancel your order/i)
    expect(answer).toBeTruthy();

})

test('should have a question', () => {
    render(<FAQ />);

    const question = screen.getByText(/What is the return policy?/i)
    expect(question).toBeTruthy();
})

test('should have a answer', async () => {
    render(<FAQ />);

    const btn = screen.getByRole('button', {
        name: /what is the return policy/i
    })
    userEvent.click(btn)

    const answer = await screen.findByText(/There must be a deal between the customers and the sellers to determine how returning items should be and our staff is not responsible of it/i)
    expect(answer).toBeTruthy();
});
