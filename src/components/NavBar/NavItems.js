import {
    AiOutlineClose
} from 'react-icons/ai';
import React, {
    useEffect,
    useState
} from 'react';
import {
    NavLink,
    useLocation
} from 'react-router-dom';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
    ABOUT_ROUTE,
    HOME_ROUTE,
    PRODUCT_ROUTE,
    PROFILE,
    SIGN_IN_ROUTE
} from '../../route';
import LanguageButton from '../LanguageButton/LanguageButton';
import {
    Signout,
    user
} from '../../features/user/userSlice';

const NavItems = ({
        showItems,
        active
    }) => {

        const userData = useSelector(user);
        const [open, setOpen] = useState(false);
        const location = useLocation();
        const dispatch = useDispatch();

        const closeNavBar = () => {
            if (open) {
                setOpen(false);
            }
        };

        useEffect(() => {
            closeNavBar();
        }, [location.key]);

  return (
    <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
        <AiOutlineClose onClick={showItems} className='text-2xl cursor-pointer'/>
        <li className='hover:text-secondary duration-300'>
            <NavLink to={HOME_ROUTE}>Home</NavLink>
            </li>
            <li className='hover:text-secondary duration-300'>
            {!_.isEmpty(userData) ? (
            <NavLink to={PRODUCT_ROUTE}>Products</NavLink>):null
            }
            </li>
        <li className='hover:text-secondary duration-300'>
            <NavLink to={ABOUT_ROUTE}>About</NavLink>
            </li>
        {!_.isEmpty(userData) ? (
        <li className='hover:text-secondary duration-300'>
            <NavLink to={PROFILE}>Profile</NavLink>
                </li>
            ) : null}

        {!_.isEmpty(userData) ? (
        <li className='hover:text-secondary duration-300'>
            <NavLink to={SIGN_IN_ROUTE}>Sign In</NavLink>
                </li>
            ) : null }

        {!_.isEmpty(userData) ? (
        <li className='hover:text-secondary duration-300'>
            <NavLink to='/'
            onClick={() => {
            dispatch(Signout());
            }}
        >
        Log Out</NavLink>
            </li>
            ) : null }
        <LanguageButton closeNavbar={closeNavBar} />
    </ul>
  );
};

export default NavItems;