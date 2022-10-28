import React from "react";

import CoffeeShopCommercial from "../assets/CoffeeShopCommercial.mp4";

function DiffSection(){
    return (
        <div className="DiffVid">
            <video src={CoffeeShopCommercial} autoPlay  loop>
            
            <track kind="captions"/>
            </video>
            <div className="WelcomeMessage">
                Welcome to our Dilmun
            </div>
        </div>
    )
}
export default DiffSection ;