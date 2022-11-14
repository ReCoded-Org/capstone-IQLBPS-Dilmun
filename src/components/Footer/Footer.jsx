import React from 'react';
import { Link } from 'react-router-dom';
import {MdEmail} from 'react-icons/md'

import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  FAQ_ROUTE,
} from '../../route';

const Footer = () => {
  return (
    <div>
      <div className="p-4 border-b bg-primary mt-1 ">
        <div className=" md:text-xl text-background flex md:content-around items-center md:justify-around justify-center ">
          <Link to={HOME_ROUTE} className="hover:text-tertiary duration-200 md:mr-0 mr-6">
           Home
          </Link>
          <Link to={FAQ_ROUTE} className="hover:text-tertiary duration-200  md:mr-0 mr-6">
            FAQ
          </Link>
          <Link to={ABOUT_ROUTE} className="hover:text-tertiary duration-200 ">
            About Us
          </Link>
          </div>
          </div>
          <div className="flex flex-col text-center text-sm p-4 text-primary bg-primary bg-opacity-75">
          <p className='text-background'><MdEmail className='text-background inline h-5 w-5'/> dilmun.recoded@gmail.com</p>
          <span className="text-background">
          © 2022 Copyright {" "}
          <Link
            className="text-background hover:text-secondary duration-200"
            to={HOME_ROUTE}
          >

            Dilmun
          </Link>
          {" - "}
          All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
