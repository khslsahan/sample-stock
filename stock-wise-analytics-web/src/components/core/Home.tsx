

const HomePage = () => {
    return (
        <>
            <div className="w-full  flex justify-center items-center bg-black mb-0" style={{ height: "70vh" }}>
                <div className="text-white text-center lg:text-8xl md:text-7xl sm:text-7xl  text-5xl  font-bold font-serif" style={{ width: "50vW" }}>
                    "By The Traders For Traders"
                </div>
            </div>
            {/* <div className="flex justify-center items-center  bg-black">
                <img src="/images/cse.jpg" alt="CSE" className="sm:w-full md:w-fit lg:w-fit object-cover" style={{ height: "20vh" }} />
            </div> */}
            {/* <SwiperSet /> */}
            <div className=" w-full flex justify-center items-center bg-black" style={{ padding: "50px 50px" }}>
                <div className="lg:w-1/2 border border-white rounded-xl shadow-lg m-2 lg:ml-4 min-cards flex flex-col justify-between">
                    <div className="text-white p-4">
                        <div className="card-image">
                            <img src="/images/eye-bold.svg" alt="CSE" className="object-cover" />
                         </div>
                        <h1 className="lg:text-4xl text-2xl p-3 font-bold font-serif">Explore Our Trend Runner</h1>
                        <div>
                            "Welcome to TrendRunner, where cutting-edge analytics empower your portfolio decisions with Market trends and insights."
                        </div>
                        <div className="pt-5 pl-3  text-blue-600 flex items-center mt-auto">
                            <span>Explore Features</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 border border-white rounded-xl shadow-lg  m-2 lg:mr-4 min-cards" >
                    <div className="text-white  p-4">
                        <div className="card-image">
                            <img src="/images/power-bold.svg" alt="CSE" className="object-cover" />
                        </div>
                        <h1 className="lg:text-4xl text-2xl p-3 font-bold font-serif">First Edge</h1>
                        <div>
                            "Discover the future of proactive investing with FirstEdge Alerts, delivering instant notifications to keep you ahead of the market curve."
                        </div>
                        <div className="pt-5  pl-3  text-blue-600 flex items-center">
                            <span>Take a Look</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default HomePage;
