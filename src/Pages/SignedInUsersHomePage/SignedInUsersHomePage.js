import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsFillCartFill } from 'react-icons/bs'
import { IoIosAddCircle } from 'react-icons/io'
import { user } from '../../features/user/userSlice'
import { ADD_ITEM_ROUTE, PRODUCT_ROUTE } from '../../route'
import ItemCard from './ItemCard'



const SignedInUsersHomePage = () => {
    const userData = useSelector(user)
    return (
        <div data-testid='SignedInUseresHomePage' className='bg-background text-primary flex flex-col items-center justify-between'>
            <div className=' bg-home-page-for-signed-in-users bg-cover bg-center w-full min-h-[40vh] md:min-h-[7p0vh] text-background p-5'>
                <div className=' mb-3 md:mb-0 pt-5 md:pt-14 md:pb-6 w-full'>
                    <h1 className='text-2xl md:text-5xl font-bold text-center'>Welcome back, </h1>
                    <h1 className='text-2xl md:text-5xl font-bold text-center'> {userData.firstName} {userData.lastName}</h1>
                    <h3 className='text-l md:text-2xl font-semi-bold text-center'> Dilmun is your best choice to buy or sell anything</h3>
                    <div className='flex flex-col items-center flex-wrap gap-4 justify-center  md:text-2xl m-4'>
                        <span className='flex  items-center gap-2'>Can&apos;t find what you need press here<Link to={PRODUCT_ROUTE}><BsFillCartFill size={30} className='hover:text-secondary transition duration-300' /></Link> </span>
                        <span className='flex  items-center gap-2'>Or add your onw <Link to={ADD_ITEM_ROUTE}><IoIosAddCircle size={30} className='hover:text-secondary transition duration-300' /></Link> </span>

                    </div>
                </div>
            </div>
            <div className='mx-4 lg:mx-0'>
                <h1 className='text-2xl md:text-3xl font-bold mt-2 mb-2'>Some of our products</h1>
                <div className='flex flex-col md:grid grid-cols-3 gap-6 mt-2'>
                    <ItemCard imgSrc="https://placeimg.com/300/300/architecture" />
                    <ItemCard imgSrc="https://placeimg.com/300/300/animals" />
                    <ItemCard imgSrc="https://placeimg.com/300/300/architecture" />
                </div>
            </div>

        </div>
    )
}

export default SignedInUsersHomePage