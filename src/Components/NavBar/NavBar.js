import { useState } from 'react';
import { Link , NavLink } from 'react-router-dom';
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
            <nav className=' h-auto md:h-24 p-2 bg-blue-200 max-w-10xl mx-auto flex justify-between md:items-center'>
                <Link to={HOME_ROUTE}>
                <img src='https://cdn.discordapp.com/attachments/1031834305703460906/1035627738440159303/Asset_23.png' className='object-scale-down h-20 justify-self-center py-0 mx-4' alt='logo'/>
                </Link>
                <div
                 className={
                togglerNav ? 'flex flex-col gap-4 md:inline' : 'hidden md:inline'
                }
                >
                <NavLink className='nav-link' onClick={clickHandler} to={HOME_ROUTE} >Home</NavLink>
                <NavLink className='nav-link' onClick={clickHandler} to={CONTACT_ROUTE} >Contact</NavLink>
                <NavLink className='nav-link' onClick={clickHandler} to={ABOUT_ROUTE} >About</NavLink>
                <NavLink className='nav-link' onClick={clickHandler} to={PROFILE} >Profile</NavLink>
                <NavLink className='nav-link' onClick={clickHandler} to={SIGN_UP_ROUTE} >Sign Up</NavLink>
                <NavLink className='nav-link' onClick={clickHandler} to={SIGN_IN_ROUTE} >Sign In</NavLink>
                <NavLink className='nav-link' onClick={clickHandler} to={LOG_OUT} >Log Out</NavLink>
                </div>
                <button 
        className=' inline md:hidden self-start nav-link'
        type="button"
        onClick={clickHandler}>
        {togglerNav ? <AiOutlineClose /> : <FaBars />}
      </button>
        <button type='submit' className='mx-4'><img src='https://cdn.discordapp.com/attachments/1031834305703460906/1035608527923843122/translation-icon.png'alt='icon'/></button>
            </nav>
    )
}

export default NavBar;