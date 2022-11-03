import React from "react";
 // import { player } from "video-react"
import Dilmun from "../assets/Dilmun.mp4";
import OverlapText from "./DiffSection/OverlapText"


function DiffSection(){
    return (
            <div className="rounded-md shadow-md bg-primary">
                
                <video src={Dilmun} autoPlay loop muted className=" opacity-50 drop-shadow-2xl rounded-md w-full h-full">
                <track kind="captions"/>
                </video> 
            <OverlapText />
            </div>
    )
}
export default DiffSection ;