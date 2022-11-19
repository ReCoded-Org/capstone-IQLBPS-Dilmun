import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import i18next from 'i18next';
import Cookies from 'js-cookie';


import languages from './LanguageConstants';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const LanguageButton = ({ closeNavbar }) => {
  const currentLanguageCode = Cookies.get('i18next') || 'en';
  const currentLanguage = languages.find(
    (language) => language.code === currentLanguageCode
  );
  const handleLanguageChange = (language) => {
    i18next.changeLanguage(language);
   
    if (closeNavbar) {
      closeNavbar();
    }
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
          <img
            className={classNames(
              currentLanguage.code === 'ku' ? 'h-6' : 'h-8',
              'w-8'
            )}
            src={currentLanguage.flag}
            alt={currentLanguage.name}
          />
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
            {languages.map((language) => (
              <Menu.Item key={language.code}>
                {({ active }) => (
                  <div
                    data-testid="language-button-option"
                    onClick={() => handleLanguageChange(language.code)}
                    aria-hidden="true"
                    className={classNames(
                      active
                        ? 'bg-background text-secondary rounded-md'
                        : 'text-background',
                      'text-sm flex justify-between items-center px-4 cursor-pointer text-background py-1'
                    )}
                  >
                    <h3>{language.name}</h3>
                    <img
                      className={classNames(
                        currentLanguage.code === 'ku' ? 'h-6' : 'h-8',
                        'w-8'
                      )}
                      src={language.flag}
                      alt={language.name}
                    />
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageButton;
