import * as React from 'react';


function SectionThree() {
    return (
        <>
            <div className="bg-black">
                <div style={{ height: '400px' }}>
                    <div className="justify-content-center align-items-start text-white">
                        <div className="text-center justify-content-center align-items-center ">
                            <h1>Features</h1>
                        </div>
                    </div>
                    <div className="row text-white">
                        <div className="col-6" style={{ height: '200px' }}>
                            <div className="card text-center text-white m-3 col-8" style={{ backgroundColor: '#ffffff80' }}>
                                <div className="card-image">
                                    <img src="images/about-us/group-11.svg" alt="CSE" className="img-fluid"  width={'45px'}/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">TrendRunner</h5>
                                    <p className="card-text">Access cutting-edge analytics for valuable insights into market trends, empowering you to make informed portfolio decisions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6" style={{ height: '200px' }}>
                            <div className="card text-center text-white m-3 col-8" style={{ backgroundColor: '#FFFFFF80' }}>
                                <div className="card-image">
                                    <img src="images/about-us/vector.svg" alt="CSE" className="img-fluid" width={'45px'}/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Firstedge Alerts</h5>
                                    <p className="card-text">Stay proactive with instant notifications that keep you informed of market changes, ensuring you never miss a beat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionThree;