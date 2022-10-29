import React from 'react'

const Footer = () => {
    return (

        <div className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-tertiary">
            <div className="sm:flex sm:items-center sm:justify-between">

                <ul className="flex flex-wrap items-center mb-6 text-sm text-secondary sm:mb-0 dark:text-primary">
                    <li>
                        <a href="./" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="./" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="./" className="mr-4 hover:underline md:mr-6 ">Product Team</a>
                    </li>
                    <li>
                        <a href="./" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"

            />

            <span className="block text-sm text-primary sm:text-center dark:text-primary">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>

        </div>



    )
}

export default Footer