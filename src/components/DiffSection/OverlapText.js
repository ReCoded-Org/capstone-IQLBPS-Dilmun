import React from "react";

function OverlapText() {
    return (
        <div className=" flex flex-col items-center justify-center text-black bg-opacity-20 pl-10 pr-10 ">
            <h2 className=" text-white text-[20px] sm:text-[40px] ">Check this video made by one of our satisfied customers!</h2>
            <button type="button" className="bg-tertiary font-semibold p-2 m-2 hover:bg-blue-700 text-white font-semibold rounded-lg w-full sm:w-auto ">
                Watch Full Video
            </button>
        </div>
    )
}


export default OverlapText;