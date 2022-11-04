// imports from react
import { Fragment, useState } from 'react'
// 3rd party imports
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
// Custom Components
import CustomButton from '../CustomButton'


// just for the demo
const category = [
    { id: 1, name: 'All Categories' },
    { id: 2, name: 'Category 1' },
    { id: 3, name: 'Category 2' },
    { id: 4, name: 'Category 3' },
    { id: 5, name: 'Category 4' }
]

const SearchBar = () => {
    const [selected, setSelected] = useState(category[0])

    return (
        <div className="sm:flex text-center justify-center mt-28 items-center p-6  bg-white rounded-xl shadow-lg">
            <div className="sm:flex justify-between bg-gray-100 p-4 w-full my-3 sm:my-0 rounded-lg">
                <div className='flex  justify-center items-center'>
                    <MagnifyingGlassIcon className='min-w-[24px] min-h-[24px] max-w-6 max-h-6 opacity-30' />
                    <input className="bg-gray-100 outline-none text-center" type="text" placeholder="Search here..." />
                </div>
                <div>
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative sm:max-w-[150px] sm:min-w-[150px] w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm">
                                <span className="block truncate text-primary">{selected.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1  w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {category.map((person) => (
                                        <Listbox.Option
                                            key={person.id}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 px-2 ${active ? 'bg-primary text-background' : 'text-gray-900'
                                                }`
                                            }
                                            value={person}
                                        >
                                            {person.name}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>

            </div>
            <div className='m-0 sm:mx-4'>
                <CustomButton paddingX='px-6' paddingY='py-5'>Submit</CustomButton>
            </div>

        </div>
    )
}
export default SearchBar