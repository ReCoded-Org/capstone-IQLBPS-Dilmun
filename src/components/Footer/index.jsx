import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className="p-4 bg-primary  rounded-lg shadow md:px-6 md:py-8 dark:bg-primary ">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to={HOME_ROUTE}>
                    <img src='https://cdn.discordapp.com/attachments/1031834305703460906/1035627738440159303/Asset_23.png' className='object-scale-down h-20 md:justify-self-center py-0 mx-10' alt='logo' />
                </Link>
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="./" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="./" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="./" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="./" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://remarkablesunburst.netlify.app/" className="hover:underline">Dilmun</a>. All Rights Reserved.
            </span>
        </div>



    )
}

export default Footer