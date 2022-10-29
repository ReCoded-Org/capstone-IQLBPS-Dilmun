import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';


import{
    HOME_ROUTE,
    CONTACT_ROUTE,
    ABOUT_ROUTE,
    SIGN_UP_ROUTE,
    SIGN_IN_ROUTE,
    LOG_OUT,
    PROFILE
} from '../../route'

function NavBar(){

     const [togglerNav, setTogglerNav] = useState(false);

     const clickHandler = () => {
         setTogglerNav(!togglerNav);
       };

    return(
            <nav className=' h-auto md:h-24 p-2 bg-primary text-background max-w-10xl mx-auto flex flex-row justify-center md:items-center '
            testid="validation"
            >
                <Link to={HOME_ROUTE}>
                <img src='https://cdn.discordapp.com/attachments/1031834305703460906/1035627738440159303/Asset_23.png' className='object-scale-down h-20 md:justify-self-center py-0 mx-10' alt='logo'/>
                </Link>
                <div
                 className={
                togglerNav ? 'flex flex-col gap-4 md:inline' : 'hidden md:inline'
                }
                >
                <Link className='nav-link hover:text-tertiary' to={HOME_ROUTE} >Home</Link>
                <Link className='nav-link hover:text-tertiary' to={CONTACT_ROUTE} >Contact</Link>
                <Link className='nav-link hover:text-tertiary' to={ABOUT_ROUTE} >About</Link>
                <Link className='nav-link hover:text-tertiary' to={PROFILE} >Profile</Link>
                <Link className='nav-link hover:text-tertiary' to={SIGN_UP_ROUTE} >Sign Up</Link>
                <Link className='nav-link hover:text-tertiary' to={SIGN_IN_ROUTE} >Sign In</Link>
                <Link className='nav-link hover:text-tertiary' to={LOG_OUT} >Log Out</Link>
                <button type='submit' id='translation-icon'><img src='https://cdn.discordapp.com/attachments/1031834305703460906/1035608527923843122/translation-icon.png' className='h-10 justify-self-center py-0 mx-10' alt='icon'/></button>
                </div>
                <button 
                className=' inline md:hidden self-start nav-link'
                type="button"
                onClick={clickHandler}>
                {togglerNav ? <AiOutlineClose /> : <FaBars />}
                </button>
            </nav>
    )
}

export default NavBar;