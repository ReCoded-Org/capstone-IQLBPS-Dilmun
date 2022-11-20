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
import {
    ABOUT_ROUTE,
    HOME_ROUTE,
    LOG_OUT,
    PRODUCT_ROUTE,
    PROFILE,
    SIGN_IN_ROUTE
} from '../../route';
import LanguageButton from '../LanguageButton/LanguageButton';

const NavItems = ({
        showItems,
        active
    }) => {

        const [open, setOpen] = useState(false);
        const location = useLocation();

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
            <NavLink to={PRODUCT_ROUTE}>Products</NavLink>
            </li>
        <li className='hover:text-secondary duration-300'>
            <NavLink to={ABOUT_ROUTE}>About</NavLink>
            </li>
        <li className='hover:text-secondary duration-300'>
            <NavLink to={PROFILE}>Profile</NavLink>
            </li>
        <li className='hover:text-secondary duration-300'>
            <NavLink to={SIGN_IN_ROUTE}>Sign In</NavLink>
            </li>
        <li className='hover:text-secondary duration-300'>
            <NavLink to={LOG_OUT}>Log Out</NavLink>
            </li>
        <LanguageButton closeNavbar={closeNavBar} />
    </ul>
  );
};

export default NavItems;