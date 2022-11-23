import DeleteItemButton from "../../components/DeleteItemButton/DeleteItemButton"


function ProfileItemPage() {
    return ( 
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl mt-10">
            <div>
                <div className="md:shrink-0">
                    <img src='https://sc02.alicdn.com/kf/He336d0194012484d8e7ab7b6645a358aZ/229015070/He336d0194012484d8e7ab7b6645a358aZ.jpg' alt='wa3' className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>

                <div className="p-8">
                    <div className="uppercase tracking-wide text-lg leading-tight text-lg font-semibold">
                        Product Name
                    </div>
                    <div className="pt-3">
                    <DeleteItemButton />
                    </div>
                    
                </div>

                <p className="mt-2 text-slate-500 pl-8">
                    Product Description
                </p>
            </div>
        </div>
    )
}

export default ProfileItemPage