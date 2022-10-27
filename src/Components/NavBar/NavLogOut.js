import { Link } from 'react-router-dom';

import{
    HOME_ROUTE,
    CONTACT_ROUTE,
    ABOUT_ROUTE,
    LOG_OUT,
    PROFILE
} from '../../route'

function NavLogIn(){
    return(
            <nav>
                <Link to={HOME_ROUTE}>Home</Link>
                <Link to={CONTACT_ROUTE}>Contact</Link>
                <Link to={ABOUT_ROUTE}>About</Link>
                <Link to={LOG_OUT}>Log Out</Link>
                <Link to={PROFILE}>Profile</Link>
            </nav>
    )
}

export default NavLogIn;