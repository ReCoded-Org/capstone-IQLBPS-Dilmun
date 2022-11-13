import React from 'react';

const ItemsDisplay = () => {
    return(
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
            <div className='bg-red-400'>1</div>
            <div className='bg-gray-400'>1</div>
            <div className='bg-black-400'>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </div>
    );
};

export default ItemsDisplay;