import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
    <nav
      role="navigation"
      className="shadow-md w-full z-10 sticky top-0 left-0 bg-gradient-to-tl from-transparent via-transparent to-secondary backdrop-blur-md "
      style={{
        boxShadow: `0px 0px 10px 0px rgba(0, 0, 0, .25)`,
        padding: `3px 1rem`,
      }}
    >
      <div className="md:flex py-2 items-center justify-between md:px-8 px-10 max-h-24 ">
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
          className={classNames(
            'hidden md:flex items-center md:flex-row flex-col md:pb-0 pb-2 absolute md:static left-0 w-full md:w-auto md:bg-transparent bg-background/70 md:shadow-none shadow-lg  transition-all duration-500 ease-in',
            open
              ? 'top-[103px] right-24 py-3 flex'
              : 'left-[-700px] top-[96px] py-3 '
          )}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                classNames(
                  'md:ml-6 text-xl font-semibold md:my-0 text-primary hover:text-secondary duration-300',
                  isActive ? 'text-secondary underline' : ''
                )
              }
              to={HOME_ROUTE}
            >
              {t('navbar.home')}
            </NavLink>
          </li>
          <li>
            {!_.isEmpty(userData) ? (
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    'md:ml-6 text-xl font-semibold md:my-0 text-primary hover:text-secondary duration-300',
                    isActive ? 'text-secondary underline' : ''
                  )
                }
                to={PRODUCT_ROUTE}
              >
                {t('navbar.products')}
              </NavLink>
            ) : null}
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                classNames(
                  'md:ml-6 text-xl font-semibold md:my-0 text-primary hover:text-secondary duration-300',
                  isActive ? 'text-secondary underline' : ''
                )
              }
              to={ABOUT_ROUTE}
            >
              {t('navbar.about')}
            </NavLink>
          </li>
          {!_.isEmpty(userData) ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    'md:ml-6 text-xl font-semibold md:my-0 text-primary hover:text-secondary duration-300',
                    isActive ? 'text-secondary underline' : ''
                  )
                }
                to={PROFILE}
              >
                {t('navbar.profile')}
              </NavLink>
            </li>
          ) : null}
          {_.isEmpty(userData) ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    'md:ml-6 text-xl font-semibold md:my-0 text-primary hover:text-secondary duration-300',
                    isActive ? ' text-secondary underline' : ''
                  )
                }
                to={SIGN_IN_ROUTE}
              >
                {t('navbar.sign_in')}
              </NavLink>
            </li>
          ) : null}
          {!_.isEmpty(userData) ? (
            <li>
              <NavLink
                className="md:ml-6 text-xl font-semibold md:my-0 text-primary hover:text-secondary duration-300"
                to="/"
                onClick={() => {
                  dispatch(Signout());
                }}
              >
                {t('navbar.log_out')}
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
