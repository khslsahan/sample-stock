import * as React from 'react';


function LandingSectionOne() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start justify-content-md-start justify-content-sm-start position-relative" style={{ height: '100%', width: '100%' }}>
                <div className="position-absolute w-100 h-100 bg-cover" style={{ backgroundImage: "url('/images/section-1-img.png')", filter: 'brightness(25%)' }}></div>
                <div className="w-100 text-center text-neutral-300 font-weight-bold" style={{ width: '519px', height: '500px', paddingTop: '10px', fontFamily: 'Montserrat', zIndex: 10 }}>
                    <span className="d-lg-block" style={{ fontSize: '50px' }}>By the Traders for the Traders</span>
                    <span className="d-md-block d-lg-none" style={{ fontSize: '45px' }}>By the Traders for the Traders</span>
                    <span className="d-sm-block d-md-none" style={{ fontSize: '40px' }}>By the Traders for the Traders</span>
                    <span className="d-block d-sm-none" style={{ fontSize: '30px' }}>By the Traders for the Traders</span>
                </div>
            </div>
        </>
    );
}

export default LandingSectionOne;