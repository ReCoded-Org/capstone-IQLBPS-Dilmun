import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    { id: 1, name: 'All Categories' },
    { id: 2, name: 'Category 1' },
    { id: 3, name: 'Category 2' },
    { id: 4, name: 'Category 3' },
    { id: 5, name: 'Category 4' }
]

const SearchBar = () => {
    const [selected, setSelected] = useState(people[0])

    return (
        <div className="sm:flex text-center justify-center mt-4 items-center p-6 space-x-6 bg-white rounded-xl shadow-lg ">
            <div className="flex bg-gray-100 p-4 w-full my-3 sm:my-0 space-x-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input className="bg-gray-100 outline-none" type="text" placeholder="Search here..." />
            </div>
            <div >
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm">
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
                                {people.map((person) => (
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
            <button type='submit' className="bg-tertiary py-3 px-5 my-3 sm:my-0 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">Search</button>
        </div>
    )
}
export default SearchBar