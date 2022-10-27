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
            <nav>
                <Link to={HOME_ROUTE}>Home</Link>
                <Link to={CONTACT_ROUTE}>Contact</Link>
                <Link to={ABOUT_ROUTE}>About</Link>
                <Link to={SIGN_UP_ROUTE}>Sign Up</Link>
                <Link to={SIGN_IN_ROUTE}>Sign In</Link>
                <Link to={LOG_OUT}>Log Out</Link>
                <Link to={PROFILE}>Profile</Link>
                <Link to={FAQ_ROUTE}>FAQ</Link>
            </nav>
    )
}

export default NavBar;