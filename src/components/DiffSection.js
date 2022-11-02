import React from "react";
import Dilmun from "../assets/Dilmun.mp4";
import OverlapText from "./DiffSection/OverlapText"


function DiffSection(){
    return (
            <div className="relative justify-center mt-8 p-8 md:flex rounded-md shadow-md justify-around bg-primary dark:bg-gray-900">
                <video src={Dilmun} autoPlay loop muted className="flex opacity-75 drop-shadow-2xl h-1/2 rounded-md p-8 w-full sm:w-fit sm:mb-0">
                <track kind="captions"/>
                </video>
                <OverlapText />
            </div>
    )
}
export default DiffSection ;