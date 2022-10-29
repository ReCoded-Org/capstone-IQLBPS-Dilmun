import React from "react";
import CoffeeShopCommercial from "../assets/CoffeeShopCommercial.mp4"

function DiffSection(){
    return (
        <div className="DiffVid">
            <video src={CoffeeShopCommercial} autoPlay loop muted >
            <track kind="captions"/>
            </video>
        </div>
    )
}
export default DiffSection ;