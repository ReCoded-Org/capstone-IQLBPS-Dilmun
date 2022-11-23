import DeleteItemButton from "../../components/DeleteItemButton/DeleteItemButton"

function ProfileItemPage() {
    return ( 
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img src='' alt='wa3' className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>

                <div className="p-8">
                    <div className="uppercase tracking-wide text-lg leading-tight text-lg font-semibold">
                        Product Name
                    </div>
                    <DeleteItemButton />
                </div>

                <p className="mt-2 text-slate-500">
                    Product Description
                </p>
            </div>
        </div>
    )
}

export default ProfileItemPage