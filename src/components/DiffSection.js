import React from "react";
import CoffeeShopCommercial from "../assets/CoffeeShopCommercial.mp4"
import OverlapText from "./DiffSection/OverlapText"
import Button from "./DiffSection/Button";

function DiffSection(){
    return (
        <div>
            <OverlapText />
            <div className="DiffVid relative flex justify-center pb-2 overflow-hidden">
                <video src={CoffeeShopCommercial} autoPlay loop muted className="opacity-75 drop-shadow-2xl">
                <track kind="captions"/>
                </video>
            </div>
            <Button />
        </div>
    )
}
export default DiffSection ;