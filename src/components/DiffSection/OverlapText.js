import React from "react";

function OverlapText() {
    function WatchFullVideoHandler(){
        const videoLink = 'https://youtu.be/K8ABga4Xcb0';
        return(
            window.open(videoLink)
        );
    }   
    return (
        <div className=" flex flex-col items-center justify-center text-black bg-opacity-20 pl-10 pr-10 ">
            <h2 className="text-center text-white text-[16px] sm:text-[32px] ">Check out this video made by one of our satisfied customers!</h2>
            <button type="button" onClick={WatchFullVideoHandler} className="bg-tertiary font-semibold p-2 m-2 hover:shadow-lg text-white font-semibold rounded-lg  sm:w-auto ">
               Watch Full Video 
            </button> 
        </div>
    )
}


export default OverlapText;