import { feedback } from "./constants/index";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    data-testid="testimonials-section"
    className="sm:py-5 py-4 flex justify-center items-center flex-col"
  >

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-4 mb-2">
      <h2 className="font-Oxygen font-bold text-center xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full"
      data-testid="testimonials-title">
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className="font-poppins font-normal text-[20px] leading-[30.8px] text-left max-w-[450px] p-6 xs:text-center"
        data-testid="testimonials-paragraph">
          Everything you need to know about our business and products anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="container flex flex-wrap sm:justify-center justify-center w-full feedback-container p-6">
      {feedback.map((card) => (
        <FeedbackCard key={card.id}
        data-testid="testimonials-card"
        {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;