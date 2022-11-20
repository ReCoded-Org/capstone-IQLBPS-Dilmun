import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsFillCartFill } from 'react-icons/bs'
import { IoIosAddCircle } from 'react-icons/io'
import { user } from '../../features/user/userSlice'
import { ADD_ITEM_ROUTE, PRODUCT_ROUTE } from '../../route'
import ImageSlider from './ImageSlider'



const SignedInUsersHomePage = () => {
    const userData = useSelector(user);
    const slides = [
        "https://placeimg.com/800/480/tech/grayscale",
        "https://placeimg.com/800/480/arch/sepia",
        "https://placeimg.com/800/480/tech/grayscale",
        "https://placeimg.com/800/480/animals/sepia",
        "https://placeimg.com/800/480/tech/sepia"
    ];

    return (
        <div data-testid='SignedInUseresHomePage' className='bg-background text-primary flex flex-col items-center justify-between'>
            <div className=' bg-home-page-for-signed-in-users bg-cover bg-center w-full min-h-[40vh] md:min-h-[70vh] text-background p-5'>
                <div className=' mb-3 md:mb-0 pt-5 md:pt-14 md:pb-6 w-full'>
                    <h1 className='text-2xl md:text-5xl font-bold text-center text-shadow'>Welcome back, </h1>
                    <h1 className='text-2xl md:text-5xl font-bold text-center'> {userData.firstName} {userData.lastName}</h1>
                    <h3 className='text-l md:text-2xl font-bold text-center'> Dilmun is your best choice to buy or sell anything</h3>
                </div>
            </div>
            <div>
                <div className='bg-primary bg-cover w-full text-background items-center justify-center  md:text-2xl p-5'>
                    <span className=' flex items-center justify-center gap-2 font-bold'>Can&apos;t find what you need press here<Link to={PRODUCT_ROUTE}><BsFillCartFill size={40} className='hover:text-secondary transition duration-300' /></Link> </span>
                    <span className=' flex items-center justify-center gap-2 font-bold'>Or add your onw <Link to={ADD_ITEM_ROUTE}><IoIosAddCircle size={40} className='hover:text-secondary transition duration-300' /></Link> </span>
                </div>
            </div>

            <div>
                <h1 className='text-2xl md:text-3xl font-bold mt-2 mb-2 text-center'>Best selling products</h1>
                <div className='flex flex-row w-full p-10 h-full'>
                    <ImageSlider slides={slides} />
                </div>
            </div>

        </div>
    )
}

export default SignedInUsersHomePage