import React from "react";
import Dilmun from "../assets/Dilmun.mp4";
import OverlapText from "./DiffSection/OverlapText"


function DiffSection(){
    return (
        <div className="relative">
            
            <div className="relative flex justify-center overflow-hidden m-8 pt-8 pb-8 md:flex rounded-md shadow-md justify-around bg-primary">
                <video src={Dilmun} autoPlay loop muted className="opacity-80 drop-shadow-2xl rounded-md p-8 w-full sm:w-fit sm:mb-0">
                <track kind="captions"/>
                </video>
                <OverlapText />
            </div>
            
        </div>
    )
}
export default DiffSection ;