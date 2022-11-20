import {
    FaBars
} from 'react-icons/fa';
import React, {
    useEffect,
    useState
} from 'react';
import {
    NavLink,
    useLocation
} from 'react-router-dom';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import _ from 'lodash';
import NavItems from './NavItems';
import LanguageButton from '../LanguageButton/LanguageButton';
import {
    ABOUT_ROUTE,
    HOME_ROUTE,
    PRODUCT_ROUTE,
    PROFILE,
    SIGN_IN_ROUTE
} from '../../route';
import {
    Signout,
    user
} from '../../features/user/userSlice';

const NavBarV2 = () => {

        const [active, setActive] = useState(false)


        const showItems = () => {
            setActive(!active)
        }

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
    <div className='fixed w-full text-primary font-bold flex justify-between top-0 z-10 p-1 items-center bg-white/20'>
        <NavLink to={HOME_ROUTE}>
            <img
              src="https://cdn.discordapp.com/attachments/1031834305703460906/1035627738440159303/Asset_23.png"
              className="object-scale-down h-20 md:justify-self-center py-0"
              alt="logo"
            />
        </NavLink>
            <div className='absolute right-7 top-8 md:hidden text-4xl'>
                <FaBars onClick={showItems} className='scale-150 cursor-pointer'/>
            </div>
                <ul className='hidden md:flex gap-8 p-6 uppercase'>

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

                <NavItems showItems={showItems} active={active}/>
    </div>
  );
};

export default NavBarV2;