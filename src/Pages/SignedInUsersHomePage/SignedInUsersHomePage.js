import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { user } from '../../features/user/userSlice'
import { ADD_ITEM_ROUTE, PRODUCT_ROUTE } from '../../route'
import ItemCard from './ItemCard'


const SignedInUsersHomePage = () => {
    const userData = useSelector(user)
    return (
        <div className='lg:h-screen bg-background text-primary flex flex-col p-4 items-center justify-between'>
            <div className='mb-3 md:mb-0 border-b border-secondary pb-2 md:pb-6 w-full'>
                <h1 className='text-2xl md:text-5xl font-bold text-center'>Hello, {userData.firstName} {userData.lastName}</h1>
                <div className='text-center md:text-2xl mt-2'>
                    <span>Can&apos;t see what you need?</span>
                    <Link className='p-1 rounded bg-tertiary ml-2 hover:text-tertiary hover:bg-primary transition duration-300' to={PRODUCT_ROUTE}>Press Here</Link>
                </div>
                <div className='md:text-2xl text-center mt-3'>
                    <span>Or add your own item</span>
                    <Link className='p-1 rounded bg-tertiary ml-2 hover:text-tertiary hover:bg-primary transition duration-300' to={ADD_ITEM_ROUTE}>Add Item</Link>
                </div>
            </div>
            <div>
                <h1 className='text-2xl md:text-3xl font-bold'>Some of our products</h1>
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