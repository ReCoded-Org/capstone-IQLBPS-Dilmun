import { Disclosure, Transition } from '@headlessui/react';
import data from './faq.json';

function FAQ() {
  return (
    <section className="bg-background py-10 mx-auto">
      <h2 className="text-4xl mb-10 text-primary font-bold">
        Frequently Asked Questions
      </h2>
      <div className=" mx-14  px-4 flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div className="w-full lg:w-1/2 max-w-md p-2">
          {data.questions.map((item, index) => (
            <Disclosure key={item.question}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex w-full justify-between border-b-2 border-primary px-4 py-4 text-left font-medium hover:text-white hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75 text-md ${
                      open
                        ? ' bg-primary text-white '
                        : ' bg-background  text-primary '
                    } ${index === 0 && ' rounded-t-lg '} ${
                      index === data.length - 1 &&
                      ' rounded-b-lg border-b-none '
                    }`}
                  >
                    <span>{item.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`${
                        open ? 'rotate-180 transform' : ''
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
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel
                      static
                      className="px-4 py-4 text-md text-gray-500 text-left"
                    >
                      {item.Answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
        <div className="w-1/2 h-full">
          <img
            className="w-full h-full max-h-96 object-contain"
            src="/assets/img/keila-hotzel-lFmuWU0tv4M-unsplash.jpg"
            alt="fkndfjn"
          />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
