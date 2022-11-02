import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';

test('should render testimonials component', () => {
    render(<Testimonials />);
    const TestimonialsElement= screen.getByTestId('testimonials-section');
    expect(TestimonialsElement).toBeInTheDocument();
});

test('testimonials section h2 should contain (What People are saying about us)', () => {
    render(<Testimonials />);
    const Testimonialstitle = screen.getByTestId('testimonials-title');
    expect(Testimonialstitle).toHaveTextContent('What People are saying about us');
});

test('testimonials section p should contain (Everything you need to know about our business and products anywhere on the planet.)', () => {
    render(<Testimonials />);
    const TestimonialsParagraph = screen.getByTestId('testimonials-paragraph');
    expect(TestimonialsParagraph).toHaveTextContent('Everything you need to know about our business and products anywhere on the planet.');
});

const feedback = [
    {
      id: "feedback-1",
      content:
        "I've made multiple purchases and every single one has been great! The selection they offer is so varied I could spend hours looking through all the items.",
      name: "Herman Jensen",
      title: "Client",
    },
    {
      id: "feedback-2",
      content:
        "Every purchase felt secure and all items were received in a timely manner. What a great place to showcase businesses goods!",
      name: "Steve Mark",
      title: "Client",
    },
    {
      id: "feedback-3",
      content:
        "I found that Dilmun was very professional and delivered a quality product in an efficient time frame. I would consider shopping with them again.",
      name: "Kenn Gallagher",
      title: "Client",
    }
  ];
  
  test("renders a <div> element", () => {
    const { container } = render(<Testimonials cards={feedback}/>);
    expect(container.querySelector("div")).toBeInTheDocument();
  });
  
  test("renders a card component for each post passed as a prop", () => {
    const { container } = render(<Testimonials cards={feedback}/>);
    expect(container.querySelector("div").children).toHaveLength(2);
  });