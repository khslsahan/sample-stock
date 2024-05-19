import * as React from 'react';


function SectionOne() {
    return (
        <>
            <div className="bg-black">
                <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="d-flex  justify-content-center align-items-center text-white">
                        <div className="text-center ">
                            <h1>About Us</h1>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className="col-md-8">
                                    <p>StockWiseAnalysis is a leading platform dedicated to providing investors with powerful tools and comprehensive insights for navigating the stock market.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionOne;