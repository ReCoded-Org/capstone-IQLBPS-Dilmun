function ItemCard () {
  return (
    <div className="w-full bg-background py-6 my-2">
      <div className="w-80 bg-background m-7 rounded-lg hover:shadow-secondary shadow-gray-400 shadow-lg hover:shadow-2xl duration-300">
        <figure className="relative max-w-sm transition-all cursor-pointer">
          <a href="/">
            <img
              className="rounded-t-lg overflow-hidden mb-3 h-80 shadow-md"
              src="https://cdn.discordapp.com/attachments/1031834305703460906/1041710013992947812/image.png"
              alt="product"
            />
            <figcaption className="absolute top-3 right-1 px-4 text-lg">
              <span className="inline-block bg-background bg-opacity-80 rounded-xl px-3 py-1 text-xl font-bold text-primary mr-2 mb-2">
                10$
              </span>
            </figcaption>
          </a>
        </figure>
        <div className="px-5 pb-5">
          <h5 className="text-3xl pb-2 font-extrabold text-primary">Title</h5>
          <span className="text-xl py-1 font-semibold text-primary">Type</span>
          <h5 className="text-base py-1 font-base text-primary">
            Description: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Voluptatibus quia,
          </h5>
          <div className="">
            <span className="text-sm inline-block mr-1 font-semibold text-primary my-2 bg-tertiary py-2 px-4 bg-opacity-90 rounded-lg">
              Category
            </span>
            <span className="text-sm inline-block mr-1 font-semibold text-primary my-2 bg-tertiary py-2 px-4 bg-opacity-90 rounded-lg">
              Category
            </span>
          </div>
          <button
            type="button"
            className="w-full my-2 duration-300 text-background bg-secondary hover:bg-primary focus:ring-1 focus:outline-none focus:ring-tertiary font-medium rounded-lg text-md px-5 py-2.5 text-center"
          >
            Email Owner
          </button>
        </div>
      </div>
    </div>
  );
  }
export default ItemCard;


