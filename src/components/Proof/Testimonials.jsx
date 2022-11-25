import { feedback } from "./constants/FeedbackCardPeopleData";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    data-testid="testimonials-section"
    className="sm:py-5 py-4 flex justify-center items-center flex-col"
  >

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-4 mb-2">
      <h2 className="font-bold text-center xs:text-[48px] text-[40px] text-primary xs:leading-[76.8px] leading-[66.8px] w-full"
        data-testid="testimonials-title">
        What Are People <br className="sm:block hidden" /> Saying About Us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className="font-poppins text-primary font-normal text-[20px] leading-[30.8px] text-center p-6 md:text-left md:max-w-[450px]"
          data-testid="testimonials-paragraph">
          Everything you need to know about our business and products wherever you are.
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