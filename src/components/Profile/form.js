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