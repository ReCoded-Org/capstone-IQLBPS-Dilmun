import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';

import { HOME_ROUTE, ABOUT_ROUTE, FAQ_ROUTE } from '../../route';

const Footer = () => {
  const [email, setEmail] = useState(false);

  return (
    <footer className="p-4 bg-primary shadow md:px-6 md:py-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link to={HOME_ROUTE} className="flex items-center mb-4 sm:mb-0">
          <img
            src="https://cdn.discordapp.com/attachments/1031834305703460906/1035627738440159303/Asset_23.png"
            className="mr-3 h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold text-background">
            Dilmun
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-background sm:mb-0 font-semibold">
          <li>
            <Link
              to={HOME_ROUTE}
              className="mr-4 hover:underline hover:text-tertiary md:mr-6 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={ABOUT_ROUTE}
              className="mr-4 hover:underline hover:text-tertiary md:mr-6"
            >
              Meet The Team
            </Link>
          </li>
          <li>
            <Link
              to={FAQ_ROUTE}
              className="mr-4 hover:underline hover:text-tertiary md:mr-6 "
            >
              FAQ
            </Link>
          </li>
          <li>
            <button type="button" onClick={() => setEmail(!email)}>
              {email ? (
                <p className="mr-4 hover:text-tertiary">
                  Dilmun.recoded@gmail.com
                </p>
              ) : (
                <MdEmail className="mr-4 hover:text-tertiary h-8 w-5" />
              )}
            </button>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-secondary sm:mx-auto lg:my-8" />
      <span className="block text-sm text-tertiary sm:text-center">
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
