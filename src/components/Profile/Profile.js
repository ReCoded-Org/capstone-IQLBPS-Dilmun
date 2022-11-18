import React , { useState} from "react";
import defaultProfileImg from "../../assets/img/defaultProfileImg.jpg";
import CustomItemCard from "../CustomComponents/CustomItemCard";
// import axios from "axios";

 function Profile(){
    const [open, setOpen] = useState(false);
    const [selectedImg , setSelectedImg] = useState(defaultProfileImg);
    

    function handleSelectProfile(e) {
       // console.log(e.target.files[0])
        setSelectedImg(e.target.files[0])  ;
       }

     function handleAddItemForum(){

    }
    
    return(
        <div className="mt-14 bg-background bg-signin-background bg-cover bg-no-repeat w-full min-h-[100vh] flex flex-col justify-center items-center content-center">

            <div className=" mt-14 mb-14 w-5/6 bg-background rounded-lg flex flex-col justify-center items-center content-center">
                    <button  className="pt-4 px-2 abdolute left-100" type="button" onClick={()=>setOpen(!open)} >
                        <svg className="w-6 h-6"   xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/></svg>
                    </button>
                        {/* <!-- Dropdown menu --> */
                        open && 
                        <div className = " text-background bg-primary rounded">
                            <ul >  { /* className={viewMode} I tried to use it here but it's not working & I don't know if there is a way to put it in the above class */ }
                                <li>
                                    <button type="button" onClick={handleSelectProfile} className="block py-1 px-2 text-[14px] sm:text-[18px] lg:text-[22px]">Change Profile picture</button>
                                </li>
                                <li>
                                    <button type="button" onClick={handleSelectProfile} className="block py-1 px-2 text-[14px] sm:text-[18px] lg:text-[22px]">settings</button>
                                </li>  
                                <li>
                                    <button type="button" onClick={handleSelectProfile} className="block py-1 px-2 text-[14px] sm:text-[18px] lg:text-[22px]">LogOut</button>
                                </li> 
                                <li>
                                    <input type="file" onChange={handleSelectProfile} className="block py-1 px-2 text-[14px] sm:text-[18px] lg:text-[22px]" />
                                </li>
                            </ul>
                    </div>}
                
                
                <div className="flex flex-col items-center justify-center content-center  mb-14 items-center justify-center content-center bg-background rounded-lg  pt-4">
                    <img src={selectedImg} alt="DefaultProfileImg" className="rounded-full w-36"/>
                    <h1 className="font-bold text-[20px] sm:text-[26px] lg:text-[34px] text-primary">User Name</h1>
                    <h3 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary">Country, City</h3>
                    <h5 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary">Contact No. </h5>
                    <h5 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary mb-5">Email </h5>
                    
                    <div className=" items-center divide-x border-t border-primary ">
                        <div className="flex-grow border-t border-primary divide-x" />
                        <h3 className="flex-shrink mx-16 font-bold text-[14px] sm:text-[18px] lg:text-[24px] text-primary mt-3 mb-3">My Items</h3>
                    </div>      
                    <div className="flex flex-row flex-wrap items-center justify-center ">
                        <CustomItemCard />
                        <CustomItemCard />
                        <CustomItemCard />
                        <CustomItemCard />
                        <CustomItemCard />
                    </div>
                    <button type="button" onClick={handleAddItemForum} className ="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"> Add New Item </button>

                </div>   
            </div>
        </div>


)}

export default Profile;