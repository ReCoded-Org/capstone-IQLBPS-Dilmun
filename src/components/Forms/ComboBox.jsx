import { Fragment, useState, forwardRef, useEffect } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { HiSelector, HiOutlineCheck } from 'react-icons/hi';

const ComboBox = forwardRef((props, ref) => {
  const { options } = props;
  const [selectedOptions, setSelectedOptions] = useState([options[0]]);
  useEffect(() => {
    if (props.edit) {
      if (typeof props.value !== 'string') setSelectedOptions([...props.value]);
      else setSelectedOptions([props.value]);
    }
  }, [props.value]);

  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="w-full">
      <Combobox
        disabled={props.disabled}
        value={selectedOptions}
        defaultValue={props.value}
        onChange={(value) => {
          setSelectedOptions(value);
          props.onChange(value);
        }}
        refName={ref}
        multiple
      >
        <div className=" mt-4 relative">
          <div className="relative w-full text-left bg-background text-primary font-medium rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-background focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden border border-secondary">
            <Combobox.Input
              className="w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-primary bg-background rounded-lg"
              displayValue={(option) => option.map((o) => o).join(', ')}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <HiSelector
                className="w-5 h-5 text-secondary"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-background text-primary font-medium rounded-md shadow-lg max-h-40 ring-1 ring-primary ring-opacity-5 focus:outline-none sm:text-sm h-52 z-50 border border-secondary">
              {filteredOptions.length === 0 && query !== '' ? (
                <div className="cursor-default select-none relative py-2 px-4 text-primary">
                  Nothing found.
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <Combobox.Option
                    key={option.id || option}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-10 pr-4 text-left ${
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
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
});

export default ComboBox;
