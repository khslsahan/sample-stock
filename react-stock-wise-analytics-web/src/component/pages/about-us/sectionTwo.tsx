import * as React from 'react';


function SectionTwo() {
    return (
        <>
            <div className="bg-black  ">
                <div style={{ height: '400px', display: 'flex' }}>
                    <div className="d-flex    align-items-strat text-white m-5">
                        <div className='row'>
                            <div className="text-start  col-7    ">
                                <h1>About The Product</h1>
                                <div className='d-flex   align-items-start mt-5'>
                                    <div className="col-md-8">
                                        <p>StockWiseAnalysis is a comprehensive platform that caters to all your stock market needs. Whether you're a seasoned investor or just starting, our tools are designed to simplify the complexities of stock analysis, empowering you to make informed decisions with confidence. With cutting-edge analytics and instant alerts, StockWiseAnalysis keeps you ahead of the curve, allowing you to navigate the markets with ease.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-5 d-md-block d-none'>
                                <img style={{ width: '100%', height: '100%' }} src="images/about-us/product-img.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionTwo;