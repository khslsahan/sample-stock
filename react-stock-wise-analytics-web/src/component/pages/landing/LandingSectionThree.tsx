import * as React from 'react';


function LandingSectionThree() {
    return (
        <>
            <div className="w-100 d-flex justify-content-center align-items-center bg-black" style={{ padding: "50px 50px" }}>
                <div className="col-lg-6 border border-white rounded-xl shadow-lg m-2 lg-ml-4 d-flex flex-column justify-content-between min-cards">
                    <div className="text-white p-4">
                        <div className="card-image">
                            <img src="/images/eye-bold.svg" alt="CSE" className="img-fluid" />
                        </div>
                        <h1 className="lg-text-4xl text-2xl p-3 font-weight-bold font-serif">Explore Our Trend Runner</h1>
                        <div>
                            "Welcome to TrendRunner, where cutting-edge analytics empower your portfolio decisions with Market trends and insights."
                        </div>
                        <div className="pt-5 pl-3 text-primary d-flex align-items-center mt-auto">
                            <span>Explore Features</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 border border-white rounded-xl shadow-lg m-2 lg-mr-4 min-cards">
                    <div className="text-white p-4">
                        <div className="card-image">
                            <img src="/images/power-bold.svg" alt="CSE" className="img-fluid" />
                        </div>
                        <h1 className="lg-text-4xl text-2xl p-3 font-weight-bold font-serif">First Edge</h1>
                        <div>
                            "Discover the future of proactive investing with FirstEdge Alerts, delivering instant notifications to keep you ahead of the market curve."
                        </div>
                        <div className="pt-5 pl-3 text-primary d-flex align-items-center">
                            <span>Take a Look</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingSectionThree;