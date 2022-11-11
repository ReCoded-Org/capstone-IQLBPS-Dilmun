import React from 'react'
import CustomButton from '../components/CustomButton'

const ItemDetailsPage = () => {
    return (
        <div className='flex text-background mt-11'>
            <div>
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="headphones" />
            </div>
            <div className=' max-w-md ml-auto mr-auto flex flex-col gap-12 rounded pt-5 px-5 bg-primary '>
                <div>
                    <h2 className='font-bold text-3xl '>Headphones</h2>
                    <span>Electronics</span>
                </div>
                <span>Price: $60</span>
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