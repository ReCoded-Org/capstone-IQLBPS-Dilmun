import { Link } from 'react-router-dom';


import{
    HOME_ROUTE,
    CONTACT_ROUTE,
    ABOUT_ROUTE,
    SIGN_UP_ROUTE,
    SIGN_IN_ROUTE,
    LOG_OUT,
    PROFILE,
    FAQ_ROUTE
} from '../../route'

function NavBar(){
    return(
            <nav className='bg-primary text-background px-4 md:text-2xl'>
            <div className='grid grid-rows-10 grid-flow-col items-center gap-1 md:gap-0'>
                <Link to={HOME_ROUTE} className='justify-self-start hover:text-tertiary'>Home</Link>
                <Link to={CONTACT_ROUTE} className='justify-self-start hover:text-tertiary'>Contact</Link>
                <Link to={ABOUT_ROUTE} className='justify-self-start hover:text-tertiary'>About</Link>
                <Link to={PROFILE} className='justify-self-start hover:text-tertiary'>Profile</Link>
                <img src='https://cdn.discordapp.com/attachments/1031834305703460906/1035591582444949564/dilmun-logo.png' className='object-scale-down h-20 justify-self-center py-0' alt='logo'/>
                <Link to={SIGN_UP_ROUTE} className='justify-self-end hover:text-tertiary'>Sign Up</Link>
                <Link to={SIGN_IN_ROUTE} className='justify-self-end hover:text-tertiary'>Sign In</Link>
                <Link to={LOG_OUT} className='justify-self-end hover:text-tertiary'>Log Out</Link>
                <Link to={FAQ_ROUTE} className='justify-self-end hover:text-tertiary'>FAQ</Link>
                <button type='submit' className='mx-4 '><img src='https://cdn.discordapp.com/attachments/1031834305703460906/1035608527923843122/translation-icon.png' className='text-background h-8 justify-self-end  hover:text-tertiary' alt='icon'/></button>
               </div>
            </nav>
    )
}

export default NavBar;