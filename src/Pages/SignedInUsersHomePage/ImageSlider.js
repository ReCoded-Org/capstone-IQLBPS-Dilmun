import React, { useState } from "react";

function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageSrc = slides[currentIndex];

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="w-full h-full p-10 relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute cursor-pointer top-1/2 inset-y-0 left-0 hover:text-secondary transition duration-300" onClick={goToPrevious}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
            <img src={imageSrc} alt='best selling list' />

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backpack</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <button type='submit' className="inline-flex items-center text-background px-3 py-2 rounded bg-secondary ml-2 hover:bg-primary transition duration-300">
                Read more
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer absolute top-1/2 inset-y-0 right-0 hover:text-secondary transition duration-300" onClick={goToNext}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    );
}

export default ImageSlider;