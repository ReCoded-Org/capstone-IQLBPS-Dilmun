import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  SIGN_IN_ROUTE,
  PROFILE,
  PRODUCT_ROUTE,
} from '../../route';
import LanguageButton from '../LanguageButton/LanguageButton';
import { Signout, user } from '../../features/slices/user';

const classNames = (...classes) => {
  return twMerge(classes);
};

function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const userData = useSelector(user);

  const closeNavBar = () => {
    if (open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    closeNavBar();
  }, [location.key]);

  return (
    <nav className="shadow-md w-full z-10 fixed top-0 left-0 bg-primary">
      <div className="md:flex bg-primary py-2 items-center justify-between md:px-8 px-10 max-h-24">
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
          className={`flex items-center md:justify-items-end justify-items-center md:flex-row flex-col md:pb-0 pb-2 absolute md:static bg-primary md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${
            open ? 'top-24' : 'top-[-170px]'
          }`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                classNames(
                  'md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-300',
                  isActive
                    ? 'bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md '
                    : ''
                )
              }
              to={HOME_ROUTE}
            >
              Home
            </NavLink>
          </li>
          <li>
            {!_.isEmpty(userData) ? (
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    'md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-300',
                    isActive
                      ? 'bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md '
                      : ''
                  )
                }
                to={PRODUCT_ROUTE}
              >
                Products
              </NavLink>
            ) : null}
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                classNames(
                  'md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-300',
                  isActive
                    ? 'bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md '
                    : ''
                )
              }
              to={ABOUT_ROUTE}
            >
              About
            </NavLink>
          </li>
          {!_.isEmpty(userData) ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    'md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-300',
                    isActive
                      ? 'bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md '
                      : ''
                  )
                }
                to={PROFILE}
              >
                Profile
              </NavLink>
            </li>
          ) : null}
          {_.isEmpty(userData) ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    'md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-300',
                    isActive
                      ? 'bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md '
                      : ''
                  )
                }
                to={SIGN_IN_ROUTE}
              >
                Sign In
              </NavLink>
            </li>
          ) : null}
          {!_.isEmpty(userData) ? (
            <li>
              <NavLink
                className="md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-300"
                to="/"
                onClick={() => {
                  dispatch(Signout());
                }}
              >
                Log Out
              </NavLink>
            </li>
          ) : null}

          <LanguageButton closeNavbar={closeNavBar} />
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
