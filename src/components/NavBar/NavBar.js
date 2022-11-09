import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import {
  HOME_ROUTE,
  CONTACT_ROUTE,
  ABOUT_ROUTE,
  SIGN_UP_ROUTE,
  SIGN_IN_ROUTE,
  LOG_OUT,
  PROFILE,
} from '../../route';
import LanguageButton from '../LanguageButton/LanguageButton';

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md w-full z-10 sticky top-0  ">
      <div className="md:flex py-2 items-center justify-between md:px-8 px-10 max-h-24  bg-background bg-opacity-30 backdrop-filter backdrop-blur-lg" >
        <div>
          <Link to={HOME_ROUTE}>
            <img
              src="https://cdn.discordapp.com/attachments/1031834305703460906/1035627738440159303/Asset_23.png"
              className="object-scale-down h-20 md:justify-self-center py-0"
              alt="logo"
            />
          </Link>
        </div>
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? (
            <AiOutlineClose className="text-6xl text-secondary absolute right-8 top-5 cursor-pointer md:hidden" />
          ) : (
            <FaBars className="text-6xl text-secondary absolute right-8 top-5 cursor-pointer md:hidden" />
          )}
        </button>
        <ul
          className={`md:flex items-center font-semibold text-secondary md:justify-items-end justify-items-center md:flex-row flex-col md:pb-0 pb-2 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-1000 ease-in ${open ? 'left-[88%] ' : 'left-[-100%]'
            }`}
        >
          <li>
            <Link
              className="md:ml-6 text-xl md:my-0 hover:text-primary' duration-300"
              to={HOME_ROUTE}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="md:ml-6 text-xl md:my-0 hover:text-primary' duration-300"
              to={CONTACT_ROUTE}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="md:ml-6 text-xl md:my-0 hover:text-primary' duration-300"
              to={ABOUT_ROUTE}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="md:ml-6 text-xl md:my-0 hover:text-primary' duration-300"
              to={PROFILE}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="md:ml-6 text-xl md:my-0 hover:text-primary' duration-300"
              to={SIGN_UP_ROUTE}
            >
              SignUp
            </Link>
          </li>
          <li>
            <Link
              className="md:ml-6 text-xl md:my-0 hover:text-primary' duration-300"
              to={SIGN_IN_ROUTE}
            >
              SignIn
            </Link>
          </li>
          <li>
            <Link
              className="md:ml-6 text-xl md:my-0 hover:text-primary' duration-300"
              to={LOG_OUT}
            >
              LogOut
            </Link>
          </li>
          <LanguageButton />
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
