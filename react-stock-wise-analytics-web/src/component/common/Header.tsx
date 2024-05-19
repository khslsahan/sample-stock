import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSubNavOpen, setIsSubNavOpen] = useState(false);

    return (
        <header className="bg-black text-white p-4   header">
            <div className="container d-flex justify-content-between align-items-center">
                <a href="/">
                    <img className="img-fluid d-md-none" style={{ maxWidth: '45px' }} src="/images/SVAlogo.png" alt="Logo" />
                    <img className="img-fluid d-none d-md-block" style={{ maxWidth: '150px' }} src="/images/SVAlogoWithName.png" alt="Logo" />
                </a>

                <div className="d-flex align-items-end justify-content-between">
                    <nav className={`navbar navbar-expand-lg `}>
                        <div className={`d-flex ${isNavOpen ? 'd-block' : 'd-none d-lg-flex'}`}>
                            <div className="relative" onMouseEnter={() => setIsSubNavOpen(true)} onMouseLeave={() => setIsSubNavOpen(false)}>
                                <div className="d-flex align-items-center text-white text-base font-normal cursor-pointer">
                                    <div className="text-center" style={{ width: '86px', height: '23px' }}>Services</div>
                                    <div className="ms-0">
                                        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0L5 5L10 0L0 0Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                {isSubNavOpen && (
                                    <div className="dropdown-menu show bg-primary text-white mt-0 p-2 rounded shadow" style={{ minWidth: 'fit-content', width: '12rem' }}>
                                        <a href="/about/team" className="dropdown-item text-white">Trend Runner</a>
                                        <a href="/about/company" className="dropdown-item text-white">First Edge</a>
                                        <a href="/about/values" className="dropdown-item text-white">Values</a>
                                    </div>
                                )}
                            </div>
                            <a href="/aboutUs" className="nav-link text-white ms-2">About Us</a>
                            <a href="/language" className="d-flex align-items-center nav-link text-white ms-2 me-4">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-3 me-1">
                                    <g id="Globe vector">
                                        <path d="M1 11C1 16.523 5.477 21 11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 1.05005C12 1.05005 15 5.00005 15 11C15 17 12 20.9501 12 20.9501M10 20.9501C10 20.9501 7 17 7 11C7 5.00005 10 1.05005 10 1.05005M1.63 14.5H20.37M1.63 7.50005H20.37" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                                EN
                            </a>
                        </div>
                        <div className="d-flex">
                            <div className="pe-4 d-flex align-items-center">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18.8049V16.7327H16V2.22735H9V0.155151H16C16.55 0.155151 17.021 0.358227 17.413 0.764378C17.805 1.17053 18.0007 1.65819 18 2.22735V16.7327C18 17.3026 17.8043 17.7906 17.413 18.1967C17.0217 18.6029 16.5507 18.8056 16 18.8049H9ZM7 14.6605L5.625 13.1582L8.175 10.5161H0V8.44395H8.175L5.625 5.80189L7 4.29955L12 9.48005L7 14.6605Z" fill="#F8F8F8" />
                                </svg>
                                <div className="d-none d-sm-block text-center text-white text-base font-normal ms-0 ps-0" style={{ width: '130px', height: '23px' }}>Login/ SignUp</div>
                            </div>
                            <button onClick={() => setIsNavOpen(!isNavOpen)} className="btn btn-link text-white d-lg-none p-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                                </svg>
                            </button>
                        </div>
                    </nav>


                </div>
            </div>
        </header>
    );
}

export default Header;
