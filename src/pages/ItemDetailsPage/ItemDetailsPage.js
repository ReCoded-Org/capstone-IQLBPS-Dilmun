import React from 'react'
import CustomButton from '../../components/CustomComponents/CustomButton'

const ItemDetailsPage = () => {
    return (
        <div className='md:flex md:h-screen text-background p-6 bg-background mt-11'>
            <div>
                <img className='max-h-full mb-6 md:mb-0' src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFnfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="headphones" />
            </div>
            <div className=' md:max-w-lg md:ml-auto min-h-[600px] md:mr-auto flex flex-col gap-7 rounded pt-5 px-5 bg-primary '>
                <div>
                    <h2 className='font-bold text-3xl '>Backpack</h2>
                    <span>Other</span>
                </div>
                <span className='flex gap-1'><p className='font-semibold'>Price:</p> $60</span>
                <span className='flex gap-1'><p className='font-semibold'>Item Type:</p> New</span>
                <span className='flex gap-1'><p className='font-semibold'>Country:</p> Spain</span>
                <span className='flex gap-1'><p className='font-semibold'>Address:</p> C/Conde de Xiquena 7, 3º, 1A Izda, 280280, Madrid</span>
                <div>
                    <span className='font-bold text-xl'>Description:</span>
                    <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Voluptatem facilis cupiditate reiciendis dignissimos hic aliquam esse aspernatur quam similique libero!</p>
                </div>
                <CustomButton paddingX='px-4' paddingY='py-4'>Email Owner</CustomButton>
            </div>
        </div>
    )
}

export default ItemDetailsPage