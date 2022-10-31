import React from "react";
import CoffeeShopCommercial from "../assets/CoffeeShopCommercial.mp4";
import OverlapText from "./DiffSection/OverlapText"


function DiffSection(){
    return (
        <div className="relative">
            
            <div className="DiffVid relative flex justify-center pb-2 overflow-hidden">
                <video src={CoffeeShopCommercial} autoPlay loop muted className="opacity-75 drop-shadow-2xl">
                <track kind="captions"/>
                </video>
                <OverlapText />
            </div>
            
        </div>
    )
}
export default DiffSection ;