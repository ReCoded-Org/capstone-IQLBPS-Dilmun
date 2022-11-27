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
    <div className="shadow-md w-full z-10 sticky top-0 left-0 bg-gradient-to-tl from-background/10 via-background/20 to-secondary shadow backdrop-blur-md bg-transparent ">
      <nav>
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
            className={`flex items-center md:flex-row flex-col md:pb-0 pb-2 absolute md:static left-0 w-full md:w-auto transition-all duration-500 ease-in ${
              open
                ? 'right-24 top-[96px] py-3 backdrop-blur-md bg-background/30'
                : 'left-[-700px] top-[96px] py-3 '
            }`}
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    'md:ml-6 text-xl md:my-0 text-primary hover:text-secondary duration-300',
                    isActive
                      ? 'bg-tertiary text-secondary px-2 pb-1 rounded-md '
                      : ''
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
                      'md:ml-6 text-xl md:my-0 text-primary hover:text-secondary duration-300',
                      isActive
                        ? 'bg-tertiary text-secondary px-2 pb-1 rounded-md '
                        : ''
                    )
                  }
                  to={PRODUCT_ROUTE}
                >
                  {t('navbar.products')}
                </NavLink>
              ) : null}
            </li>
            {!_.isEmpty(userData) ? (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      'md:ml-6 text-xl md:my-0 text-primary hover:text-secondary duration-300',
                      isActive
                        ? 'bg-tertiary text-secondary px-2 pb-1 rounded-md '
                        : ''
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
                      'md:ml-6 text-xl md:my-0 text-primary hover:text-secondary duration-300',
                      isActive
                        ? 'bg-tertiary text-secondary px-2 pb-1 rounded-md '
                        : ''
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
                  className="md:ml-6 text-xl md:my-0 text-primary hover:text-secondary duration-300"
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
    </div>
  );
}
export default NavBar;
