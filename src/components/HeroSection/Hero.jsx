function Hero() {
  return (
    <div className="backdrop-blur-md bg-white/30 h-[100vh] bg-hero-bg bg-no-repeat text-center text-background bg-cover">
      <div className="backdrop-blur-md w-full h-full  flex flex-col justify-center text-center">
        <div className=" text-bg-black md:mx-0 mx-4">
          <h1 className=" text-background text-7xl font-bold  ">
            Welcome to Dilmun
          </h1>
          <p className="text-background text-xl my-4">
            Your Way to Get Quality Products!
          </p>
          <div className="btn__container">
            <button
              type="button"
              className="bg-secondary hover:bg-tertiary text-white font-bold py-2 px-4 rounded-full"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
