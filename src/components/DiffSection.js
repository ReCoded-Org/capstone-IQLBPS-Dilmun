import React from "react";
 // import { player } from "video-react"
import Dilmun from "../assets/Dilmun.mp4";
import OverlapText from "./DiffSection/OverlapText"


function DiffSection(){
    return (
            <div className="rounded-md shadow-md bg-primary w-full h-96 relative">
                <video src={Dilmun} autoPlay loop muted className="w-full h-full object-cover opacity-60 drop-shadow-2xl rounded-md absolute">
                <track kind="captions"/>
                </video>
                <div  className=" relative mt-14 pt-24 lg:pt-18">
                <OverlapText />
                </div> 
            </div>
    )
}
export default DiffSection ;