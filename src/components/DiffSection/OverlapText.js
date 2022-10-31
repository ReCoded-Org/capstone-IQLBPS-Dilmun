import React from "react";
import Button from "./Button";

function OverlapText() {
    return (
    <div className ="absolute mt-60 my-10">
        <div className="relative z-30 p-5 text-2xl text-black bg-opacity-20">
            <h2 className="text-black font-bold">Check this awesome video made by one of our satisfied customers!</h2>
        </div>
        <Button />
    </div>
    )
}


export default OverlapText;