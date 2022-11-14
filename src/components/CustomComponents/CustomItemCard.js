import React from "react";
import Item1 from "../../assets/img/Item1.jpg";
// this is a basic we are supposed to use this component to display items in the profile page 

function CustomItemCard(){
    

    return(

        <div className="flex flex-col text-background bg-primary p-2 m-1 rounded-lg items-center justify-center content-center ">
            <img src={Item1} alt="item1" className="w-[140px] sm:w-[200px] lg:w-[320px] rounded-lg" />
            <p className="font-bold text-[14px] sm:text-[18px] lg:text-[24px] "> Item name </p>
            <p className="font-semibold text-[14px] sm:text-[18px] lg:text-[22px] ">Item details</p>
            <p className=" text-[14px] sm:text-[18px] lg:text-[22px] ">Price </p> 
        </div>
    )
}
export default CustomItemCard;