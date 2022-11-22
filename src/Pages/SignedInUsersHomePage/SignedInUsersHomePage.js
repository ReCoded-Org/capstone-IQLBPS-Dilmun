import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsFillCartFill } from 'react-icons/bs'
import { IoIosAddCircle } from 'react-icons/io'
import { user } from '../../features/user/userSlice'
import { ADD_ITEM_ROUTE, PRODUCT_ROUTE } from '../../route'
import ItemCard from './ItemCard'



const SignedInUsersHomePage = () => {
    const userData = useSelector(user);

    return (
        <div data-testid='SignedInUseresHomePage' className='bg-background text-primary flex flex-col items-center justify-between'>
            <div className=' bg-home-page-for-signed-in-users flex flex-col justify-center bg-cover bg-center w-full min-h-[50vh] text-white p-5 shadow-lg'>
                <div className=' mb-3 md:mb-0 pt-5 md:pt-14 md:pb-6 w-full'>
                    <h1 className='text-2xl md:text-6xl font-bold text-center text-shadow'>Welcome back, </h1>
                    <h1 className='text-2xl md:text-6xl font-bold text-center mb-2'> {userData.firstName} {userData.lastName}</h1>
                    <h3 className='md:text-3xl font-bold text-center'> Dilmun is your best choice to buy or sell anything</h3>
                    <div className='flex justify-center gap-2'>
                        <span className=' flex items-center justify-center gap-2 font-bold md:text-2xl'>Can&apos;t find what you need? Check pur list<Link to={PRODUCT_ROUTE}><BsFillCartFill size={40} className='hover:text-background transition duration-300' /></Link> </span>
                        <span className=' flex items-center justify-center gap-2 font-bold md:text-2xl'>or add an item <Link to={ADD_ITEM_ROUTE}><IoIosAddCircle size={40} className='hover:text-background transition duration-300' /></Link> </span>
                    </div>


                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-4xl font-semibold mb-4 ml-4'>Some of our Products</h1>
                <div className='w-full px-5 lg:px-0 overflow-x-scroll slider flex flex-col lg:flex-row gap-4'>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>



        </div>
    )
}

export default SignedInUsersHomePage