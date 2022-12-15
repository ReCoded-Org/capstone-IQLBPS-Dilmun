import React from 'react';
import abtImg from '../../assets/aboutUS.png';

const AboutUsHeader = () => {
    return (
        <div className=" container mx-auto px-4 mt-28" >
            <div className="flex justify-center	items-center">
                <h1 className='text-4xl text-primary font-bold mt-0 mb-6'>
                    About us
                </h1>
            </div>
            <div className=" flex lg:flex-row flex-col lg:justify-around justify-center items-center">
                <div className="">
                    <p className="text-secondary  text-lg p-12 pt-24">This website is the product of a group of front-end developers of the Re:coded Bootcamp. The name of the web application is Dilmun. The Dilmun web application resembles an online bazar’s front-end. The purpose of the project is to demonstrate the team’s skills with the use of JavaScript frameworks and technologies.</p>
                </div>
                <div className="max-w-sm rounded-[32px] overflow-hidden shadow-lgr"><img src={abtImg} alt='Team' /></div>
            </div>
        </div>
    );
};

export default AboutUsHeader;