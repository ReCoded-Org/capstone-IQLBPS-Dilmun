import React , { useState} from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { user } from '../../features/user/userSlice';
import { auth } from '../../firebase-config';
import { ADD_ITEM_ROUTE } from '../../route';
import defaultProfileImg from "../../assets/img/defaultProfileImg.jpg";
import defaultBGImg from "../../assets/img/defaultBGImg.jpg";
import CustomItemCard from "../CustomComponents/CustomItemCard";
// import axios from "axios";

 function Profile(){
    const userData = useSelector(user) ;
    const address = userData.address ;
    console.log("user address", address);
    // const [open, setOpen] = useState(false);
    const [selectedImg , setSelectedImg] = useState(defaultProfileImg);
  //  const [selectedBGImg , setSelectedBGImg] = useState(defaultBGImg);

     function handleSelectProfile(e) {
        // console.log(e.target.files[0])
         setSelectedImg(e.target.files[0])  ;
        }
    // function handleSelectBG(e) {
    //     // console.log(e.target.files[0])
    //      setSelectedBGImg(e.target.files[0])  ;
    //      }

    
    return(
        <div className="mt-5 bg-background bg-signin-background bg-cover bg-no-repeat w-full min-h-[100vh] flex flex-col justify-center items-center content-center">

            <div className=" mt-5 mb-14 w-5/6 bg-background rounded-lg h-96">
                <div className="flex flex-col justify-center items-center rounded-lg ">  
                    <img src={defaultBGImg} alt="Background Img" className="bg-cover bg-center w-full min-h-[20vh] md:min-h-[40vh] rounded-lg "/>
                    <img src={selectedImg} alt="Profile Img" className="rounded-full w-36 absolute flex outline outline-background  min-h-[15vh] md:min-h-[30vh] min-w-[15vh] md:min-w-[30vh]"/>
                </div>
                <div className="flex flex-col items-center justify-center content-center  mb-14 bg-background rounded-lg  pt-4">
                    <h1 className="font-bold text-[20px] sm:text-[26px] lg:text-[34px] text-primary m-1">{userData.firstName} {userData.lastName}</h1>
                    <h3 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary m-1"> Country, City</h3>
                    <h5 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary m-1"> Contact No. </h5>
                    <h5 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary flex flex-row m-1">{auth.currentUser.email}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </h5>
                  
                    { /* form component */ }
                    <form className="hidden w-110 ">
                        <div className="bg-[#81C3D7] py-6 px-10 sm:max-w-md w-full rounded-md">
                            <div className="sm:text-3xl text-2xl font-semibold text-center w-full text-primary  mb-12">
                            Edit your profile 
                            </div>
                        {/* Image upload component */ }
                        <div className="flex justify-center mt-6">
                            <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                            <div className="m-4">
                                <p className="inline-block mb-3 text-gray-500">Profile picture upload</p>
                                <div className="flex items-center justify-center w-full">
                                    <div className="flex flex-col w-80 h-24 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                        <div className="flex flex-col items-center justify-center pt-7">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400 group-hover:text-gray-600"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path 
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Attach a file</p>
                                    </div>
                                    <input type="file" className="opacity-0" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center p-2">
                            <button type="button"className=" rounded-full  p-3 w-full sm:w-56   bg-[#D9DCD6] hover:bg-neutral-300 text-primary text-lg font-semibold " >
                            Upload</button>
                        </div>
                    </div>
                </div> 
                        <div className="">
                            <div>
                                <input type="text" className="  focus:outline-none border-b w-full mt-7 pb-3 border-sky-400 placeholder-gray-500"  placeholder="First name "/>
                            </div>
                            <div>
                                <input type="text" className=" focus:outline-none border-b w-full pb-3 border-sky-600 placeholder-gray-500 my-8"  placeholder="Last name "/>
                            </div>
                            <div className="flex justify-center my-6">
                                <button type="button" className=" rounded-full  p-3 w-full sm:w-56  bg-[#D9DCD6] hover:bg-neutral-300  text-primary text-lg font-semibold " >
                                Save
                                </button>
                            </div>
                        
                        </div>
                    </div>
                </form>

                    <div className=" items-center divide-x border-t border-primary ">
                        <div className="flex-grow border-t border-primary divide-x" />
                        <h3 className="flex-shrink mx-16 font-bold text-[14px] sm:text-[18px] lg:text-[24px] text-primary mt-3 mb-3">My Items</h3>
                    </div>      
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 p-5">
                        <CustomItemCard />
                        <CustomItemCard />
                        <CustomItemCard />
                        <CustomItemCard />
                        <CustomItemCard />
                    </div>
                    <Link to={ADD_ITEM_ROUTE}> <button type="button" className ="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"> Add New Item </button></Link>
                    { /* this button will be removed it's just to keep the handle image function */}
                     <button type="button" onClick={handleSelectProfile} className ="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"> dump button</button>
                </div>   
            </div>
        </div>


)}

export default Profile;