import * as React from 'react';


function SectionTwo() {
    return (
        <>
            <div className="bg-black">
                <div style={{ height: '400px', display: 'flex' }}>
                    <div className="d-flex container   align-items-strat text-white m-5">
                        <div className='row'>
                            <div className="text-start  col-8">
                                <h1>About The Product</h1>
                                <div className='d-flex   align-items-start mt-5'>
                                    <div className="col-md-8">
                                        <p>StockWiseAnalysis is a leading platform dedicated to providing investors with powerful tools and comprehensive insights for navigating the stock market.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
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