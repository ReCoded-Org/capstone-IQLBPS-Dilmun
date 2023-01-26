import { Disclosure, Transition } from '@headlessui/react';
import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function FAQ() {
  const closeRecent = useRef(undefined);
  const { t } = useTranslation();
  const data = {
    questions: [
      {
        question: t('faq.question_one_title'),
        answer: t('faq.question_one_answer'),
      },
      {
        question: t('faq.question_two_title'),
        answer: t('faq.question_two_answer'),
      },
      {
        question: t('faq.question_three_title'),
        answer: t('faq.question_three_answer'),
      },
      {
        question: t('faq.question_four_title'),
        answer: t('faq.question_four_answer'),
      },
      {
        question: t('faq.question_five_title'),
        answer: t('faq.question_five_answer'),
      },
    ],
  };

  // this is stored in useCallback to impede unnecessary rerenders.
  // Calling this function with the close function available from disclosure will return a proper callback
  const closeCurrent = useCallback(
    (close) => () => {
      if (closeRecent.current && closeRecent.current !== close) {
        closeRecent.current();
      }
      closeRecent.current = close;
    },
    [closeRecent.current]
  );

  return (
    <section className="bg-background py-20 mx-auto  mt-5">
      <h2 className="text-4xl mb-10 text-primary font-bold text-center">
        {t('faq.frequently_asked_questions')}
      </h2>
      <div className="max-w-7xl mx-auto px-4 py-10 lg:max-h-100 flex flex-col-reverse lg:flex-row gap-4 justify-between items-center">
        <div className="w-full lg:w-1/2 max-w-lg p-2 ">
          {data.questions.map((item, index) => (
            <Disclosure key={item.question}>
              {({ open, close }) => (
                <>
                  <Disclosure.Button
                    className={`flex w-full justify-between border-b-2 border-primary px-4 py-4 text-left font-medium hover:text-white hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75 text-md ${
                      open
                        ? ' bg-primary text-white '
                        : ' bg-background text-primary '
                    } ${index === 0 && ' rounded-t-lg '} ${
                      index === data.length - 1 &&
                      ' rounded-b-lg border-b-none '
                    }`}
                    onClick={closeCurrent(close)}
                  >
                    <span className="w-3/4 md:w-full">{item.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`${
                        open
                          ? 'duration-200'
                          : 'rotate-180 duration-200 transform'
                      } h-5 w-5`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-75 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition-opacity duration-0 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel
                      static
                      id={item.name}
                      className="px-4 py-4 text-md text-gray-500 text-left"
                    >
                      {item.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <img
            className="w-full h-full max-h-96 object-contain 	"
            src="/assets/img/faq.png"
            alt="frequently asked questions"
          />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
