import {
    FaBars
} from 'react-icons/fa';
import React, {
    useEffect,
    useState
} from 'react';
import {
    Link,
    useLocation
} from 'react-router-dom';
import NavItems from './NavItems';
import LanguageButton from '../LanguageButton/LanguageButton';
import {
    ABOUT_ROUTE,
    HOME_ROUTE,
    LOG_OUT,
    PRODUCT_ROUTE,
    PROFILE,
    SIGN_IN_ROUTE
} from '../../route';

const NavBar = () => {

        const [active, setActive] = useState(false)

        const showItems = () => {
            setActive(!active)
        }

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
    <div className='fixed w-full text-white flex justify-between p-4 items-center'>

        <Link to={HOME_ROUTE}>
            <img
              src="https://cdn.discordapp.com/attachments/1031834305703460906/1035627738440159303/Asset_23.png"
              className="object-scale-down h-20 md:justify-self-center py-0"
              alt="logo"
            />
        </Link>

        <nav>

            <div className='absolute right-6 md:hidden top-6 scale-150'>
                <FaBars onClick={showItems} className='scale-150 cursor-pointer'/>
            </div>

                <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10'>
                <li><Link to={HOME_ROUTE}>Home</Link></li>
                <li><Link to={PRODUCT_ROUTE}>Products</Link></li>
                <li><Link to={ABOUT_ROUTE}>About</Link></li>
                <li><Link to={PROFILE}>Profile</Link></li>
                <li><Link to={SIGN_IN_ROUTE}>Sign In</Link></li>
                <li><Link to={LOG_OUT}>Log Out</Link></li>
                <LanguageButton closeNavbar={closeNavBar} />
                </ul>

                <NavItems showItems={showItems} active={active}/>

        </nav>

    </div>
  );
};

export default NavBar;