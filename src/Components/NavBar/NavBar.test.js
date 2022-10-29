import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";




it('render NavBar correctly', () => {
    const {getByRole} = render( 
        <Router>
         <NavBar />
        </Router>);
        expect(getByRole("navigation")).toMatchSnapshot()
    })
    // expect(queryByAltText('logo')).toBeTruthy()
    // expect(queryByAltText('logo')).toMatchSnapshot("<img src='https://cdn.discordapp.com/attachments/1031834305703460906/1035627738440159303/Asset_23.png' className='object-scale-down h-20 md:justify-self-center py-0 mx-10' alt='logo'/>")
    // expect(queryByAltText('icon')).toBeTruthy()
    // expect(queryByAltText('icon'))
    // .toMatchSnapshot("<button type='submit' id='translation-icon'><img src='https://cdn.discordapp.com/attachments/1031834305703460906/1035608527923843122/translation-icon.png' className='h-10 justify-self-center py-0 mx-10' alt='icon'/></button>")
    // expect(getAllByRole('link'))
    // .toMatchSnapshot(" <Link className='nav-link hover:text-tertiary' to={HOME_ROUTE} >Home</Link><Link className='nav-link hover:text-tertiary' to={CONTACT_ROUTE} >Contact</Link><Link className='nav-link hover:text-tertiary' to={ABOUT_ROUTE} >About</Link><Link className='nav-link hover:text-tertiary' to={PROFILE} >Profile</Link><Link className='nav-link hover:text-tertiary' to={SIGN_UP_ROUTE} >Sign Up</Link><Link className='nav-link hover:text-tertiary' to={SIGN_IN_ROUTE} >Sign In</Link><Link className='nav-link hover:text-tertiary' to={LOG_OUT} >Log Out</Link>")