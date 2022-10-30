import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import {SiGoogletranslate} from 'react-icons/si'

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

    const [open,setOpen]=useState(false);

    return(
     <nav>
        <div className='md:flex bg-primary items-center justify-between md:px-8 px-10 shadow-md w-full fixed top-0 left-0'>
                <div >
                <Link to={HOME_ROUTE}>
                <img src='https://cdn.discordapp.com/attachments/1031834305703460906/1035627738440159303/Asset_23.png'
                className='object-scale-down h-20 justify-self-center py-0 mt-2' alt='logo'/>
                </Link>
                </div>
                <button 
                type='button'
                onClick={()=>setOpen(!open)}>  
                {open ? <AiOutlineClose className='text-6xl text-secondary absolute right-8 top-7 cursor-pointer md:hidden'/> : <FaBars className='text-6xl text-secondary absolute right-8 top-7 cursor-pointer md:hidden'/>}
                </button>
                <ul className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-primary md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                    <li><Link className='md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-500' to={HOME_ROUTE} >Home</Link></li>
                    <li><Link className='md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-500' to={CONTACT_ROUTE} >Contact</Link></li>
                    <li><Link className='md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-500' to={ABOUT_ROUTE} >About</Link></li>
                    <li><Link className='md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-500' to={PROFILE} >Profile</Link></li>
                    <li><Link className='md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-500' to={SIGN_UP_ROUTE} >SignUp</Link></li>
                    <li><Link className='md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-500' to={SIGN_IN_ROUTE} >SignIn</Link></li>
                    <li><Link className='md:ml-6 text-xl md:my-0 text-background hover:text-secondary duration-500' to={LOG_OUT} >LogOut</Link></li>
                    <li><button type='submit'>
                    <SiGoogletranslate className=' text-3xl md:ml-6 md:my-0 text-background hover:text-secondary duration-500' />
                </button></li>
                </ul>
        </div>
    </nav>
    )
}
export default NavBar;