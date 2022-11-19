import {
    AiOutlineClose
} from 'react-icons/ai';
import React, {
    useEffect,
    useState
} from 'react';
import {
    Link,
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
    <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
        <AiOutlineClose onClick={showItems} className='cursor-pointer'/>
        <li><Link to={HOME_ROUTE}>Home</Link></li>
        <li><Link to={PRODUCT_ROUTE}>Products</Link></li>
        <li><Link to={ABOUT_ROUTE}>About</Link></li>
        <li><Link to={PROFILE}>Profile</Link></li>
        <li><Link to={SIGN_IN_ROUTE}>Sign In</Link></li>
        <li><Link to={LOG_OUT}>Log Out</Link></li>
        <LanguageButton closeNavbar={closeNavBar} />
    </ul>
  );
};

export default NavItems;