import React from 'react';
import { Link } from 'react-router-dom';


import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  FAQ_ROUTE,
} from '../../route';

const Footer = () => {
  return (
<footer className="p-4 bg-background rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
<span className="text-sm text-primary sm:text-center ">© 2022 <Link to={HOME_ROUTE} className="hover:underline">Dilmun™</Link>. All Rights Reserved.
</span>
<ul className="flex flex-wrap items-center mt-3 text-sm text-primary sm:mt-0">
    <li>
        <Link to={HOME_ROUTE} className="mr-4 hover:underline md:mr-6 ">Home</Link>
    </li>
    <li>
        <Link to={ABOUT_ROUTE} className="mr-4 hover:underline md:mr-6">About</Link>
    </li>
    <li>
        <Link to={FAQ_ROUTE} className="mr-4 hover:underline md:mr-6">FAQ</Link>
    </li>
</ul>
</footer>
  );
};

export default Footer;
