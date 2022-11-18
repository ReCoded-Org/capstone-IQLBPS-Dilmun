import React from 'react'

const ItemCard = ({ imgSrc }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-full" src={imgSrc} alt="Product-img" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backpack</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <button type='submit' className="inline-flex items-center text-background px-3 py-2 rounded bg-secondary ml-2 hover:bg-primary transition duration-300">
                    Read more
                </button>
            </div>
        </div>

    )
}

export default ItemCard