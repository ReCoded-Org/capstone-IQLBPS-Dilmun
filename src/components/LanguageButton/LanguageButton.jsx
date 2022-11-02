import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { SiGoogletranslate } from 'react-icons/si';

import UsFlag from '../../assets/img/us-flag.svg';
import IraqFlag from '../../assets/img/iraq-flag.svg';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const LanguageButton = () => {
  const handleLanguageChange = (language) => {
    localStorage.setItem('language', language);
  };

  return (
    <Menu
      as="div"
      data-testid="language-button"
      className="relative inline-block text-left"
    >
      <div>
        <Menu.Button
          data-testid="language-botton-toggle"
          className="md:ml-6 text-2xl md:mt-0 mt-2 text-background hover:text-secondary duration-500"
        >
          <SiGoogletranslate />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-24 md:right-0 z-10 mt-2 w-56 origin-center md:origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
          <div>
            <Menu.Item>
              {({ active }) => (
                <div
                  data-testid="language-button-option"
                  onClick={() => handleLanguageChange('en')}
                  aria-hidden="true"
                  className={classNames(
                    active ? 'bg-secondary rounded-md' : '',
                    'text-sm flex justify-between items-center px-4 cursor-pointer text-background'
                  )}
                >
                  <h3>English</h3>
                  <img className="h-8 w-8" src={UsFlag} alt="English" />
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  data-testid="language-button-option"
                  onClick={() => handleLanguageChange('ar')}
                  aria-hidden="true"
                  className={classNames(
                    active ? 'bg-secondary rounded-md' : '',
                    'text-sm flex justify-between items-center px-4 cursor-pointer text-background'
                  )}
                >
                  <h3>Arabic</h3>
                  <img className="h-8 w-8" src={IraqFlag} alt="Arabic" />
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageButton;
