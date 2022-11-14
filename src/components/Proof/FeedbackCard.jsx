import { quotes } from "./assets/FeedbackCardImages";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col px-5 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-secondary ease-in-out duration-500"
    data-testid="feedbackcard-div">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-poppins font-normal text-[17px] leading-[32px] text-black my-10"
      data-testid="feedback-card-content">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[19px] leading-[32px] text-black"
          data-testid="feedback-card-name">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[15px] leading-[24px] text-left text-dimWhite"
          data-testid="feedback-card-title">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;