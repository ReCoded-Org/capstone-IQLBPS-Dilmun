import React, { Fragment } from 'react';
import { useController } from 'react-hook-form';
import { Listbox, Transition } from '@headlessui/react';
import { HiSelector, HiOutlineCheck } from 'react-icons/hi';

const ListBox = (props) => {
  const { options, defaultValue, updateType } = props;
  const {
    field: { value, onChange },
  } = useController(props);

  return (
    <div className="w-full mt-4">
      <Listbox
        value={value}
        onChange={(v) => {
          onChange(v);
          updateType(v);
        }}
        defaultValue={defaultValue}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-background  text-primary font-medium rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{value}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <HiSelector
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-background rounded-md shadow-lg max-h-40 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
              {options.map((option, idx) => (
                <Listbox.Option
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active
                        ? 'text-white bg-secondary bg-opacity-50'
                        : 'text-primary'
                    }`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name || option}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-secondary' : 'text-tertiary'
                          }`}
                        >
                          <HiOutlineCheck
                            className="w-5 h-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListBox;
