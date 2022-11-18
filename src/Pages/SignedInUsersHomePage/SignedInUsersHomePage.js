import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { user } from '../../features/user/userSlice'
import { ADD_ITEM_ROUTE, PRODUCT_ROUTE } from '../../route'
import ItemCard from './ItemCard'


const SignedInUsersHomePage = () => {
    const userData = useSelector(user)
    return (
        <div data-testid='SignedInUseresHomePage' className='bg-background text-primary flex flex-col items-center justify-between'>
            <div className=' bg-home-page-for-signed-in-users bg-cover w-full min-h-[40vh] md:min-h-[7p0vh] text-background p-5'>
                <div className=' mb-3 md:mb-0 pt-5 md:pt-14 md:pb-6 w-full'>
                    <h1 className='text-2xl md:text-5xl font-bold text-center'>Welcome back, </h1>
                    <h1 className='text-2xl md:text-5xl font-bold text-center'> {userData.firstName} {userData.lastName}</h1>
                    <h3 className='text-l md:text-2xl font-semi-bold text-center'> Dilmun is your best choice to buy or sell anything</h3>
                    <div className='flex flex-row flex-wrap gap-4 justify-center  md:text-2xl m-4'>
                        <Link className='px-3 py-2 rounded bg-secondary ml-2 hover:text-tertiary hover:bg-primary transition duration-300' to={PRODUCT_ROUTE}>More Products</Link>
                        <Link className='px-3 py-2 rounded bg-secondary ml-2 hover:text-tertiary hover:bg-primary transition duration-300' to={ADD_ITEM_ROUTE}>Add New Item</Link>
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