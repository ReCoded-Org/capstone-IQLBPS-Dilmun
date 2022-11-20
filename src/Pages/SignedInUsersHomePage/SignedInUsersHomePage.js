import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { user } from '../../features/user/userSlice'
import { ADD_ITEM_ROUTE, PRODUCT_ROUTE } from '../../route'
import ItemCard from './ItemCard'
import ImageSlider from './ImageSlider'



const SignedInUsersHomePage = () => {
    const userData = useSelector(user)
    const slides = [
        { url: "https://placeimg.com/800/480/tech/grayscale"},
        { url: "https://placeimg.com/800/480/arch/sepia"},
        { url: "https://placeimg.com/800/480/tech/grayscale"},
        { url: "https://placeimg.com/800/480/animals/sepia"},
        { url: "https://placeimg.com/800/480/tech/sepia"}
    ]

    return (
        <div data-testid='SignedInUseresHomePage' className='bg-background text-primary flex flex-col items-center justify-between'>
            <div className=' bg-home-page-for-signed-in-users bg-cover bg-center w-full min-h-[40vh] md:min-h-[7p0vh] text-background p-5'>
                <div className=' mb-3 md:mb-0 pt-5 md:pt-14 md:pb-6 w-full'>
                    <h1 className='text-2xl md:text-5xl font-bold text-center '>Welcome back, </h1>
                    <h1 className='text-2xl md:text-5xl font-bold text-center '> {userData.firstName} {userData.lastName}</h1>
                    <h3 className='text-l md:text-2xl font-bold text-center'> Dilmun is your best choice to buy or sell anything</h3>
                    <div className='text-center md:text-2xl m-4'>
                        <Link className='px-3 py-2 rounded bg-primary text-background ml-2 hover:text-tertiary hover:bg-secondary transition duration-300' to={PRODUCT_ROUTE}>More Products</Link>
                        <Link className='px-3 py-2 rounded bg-primary text-background ml-2 hover:text-tertiary hover:bg-secondary transition duration-300' to={ADD_ITEM_ROUTE}>Add New Item</Link>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-2xl md:text-3xl font-bold mt-2 mb-2 text-center'>Best selling products</h1>
                <div className='flex flex-row w-full p-10 h-full'>
                    <ImageSlider slides = {slides}/>
                </div>
            </div>

            <div> 
                <h1 className='text-2xl md:text-3xl font-bold mt-2 mb-2'>New arrival products</h1>
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