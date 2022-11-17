import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';

import { HOME_ROUTE, ABOUT_ROUTE, FAQ_ROUTE } from '../../route';

const Footer = () => {
  return (
    <footer className="p-4 bg-gradient-to-br from-background to-tertiary bg-opacity-75 shadow md:p-5 backdrop-blur-md">
      <div className="lg:grid lg:grid-cols-4 gap-4">
        <Link to={HOME_ROUTE}  className="flex lg:flex-row flex-col mb-4 sm:mb-0 col-span-2 lg:justify-start justify-center">
          <img
            src="https://cdn.discordapp.com/attachments/1031834305703460906/1035627738440159303/Asset_23.png"
            className="mr-3 h-32 w-min lg:self-start self-center"
            alt="Flowbite Logo"
          />
          <span className="self-center text-3xl lg:mb-0 mb-3 font-semibold text-primary">
          Designed to meet your needs.
          </span>
          </Link>
        <div className="col-span-1 flex lg:my-0 my-3 mx-3 lg:justify-start justify-center text-center">
        <ul className="mb-6 text-lg text-primary sm:mb-0 font-base justify-self-center">
        <span className="text-2xl font-bold text-primary">
          Quick Links
        </span>
            <li>
              <Link
                to={HOME_ROUTE}
                className="mr-4 hover:underline hover:text-tertiary duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={ABOUT_ROUTE}
                className="mr-4 hover:underline hover:text-tertiary duration-200"
              >
                Meet The Team
              </Link>
            </li>
            <li>
              <Link
                to={FAQ_ROUTE}
                className="mr-4 hover:underline hover:text-tertiary duration-200"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 mx-3 flex lg:justify-start justify-center text-center">
        <ul className="mb-6 text-base text-primary sm:mb-0 font-base">
        <span className="text-2xl font-bold text-primary">Contact Us</span>
            <li>
              <a href="mailto:dilmun.recoded@gmail.com">
                <MdEmail className=" hover:text-tertiary duration-200 h-8 w-5 inline" />{' '}
                dilmun.recoded@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-4 border-secondary sm:mx-auto lg:my-6" />
      <span className="block text-sm text-secondary lg:text-start text-center">
        © 2022{' '}
        <Link to={HOME_ROUTE} className="hover:underline">
          Dilmun™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
