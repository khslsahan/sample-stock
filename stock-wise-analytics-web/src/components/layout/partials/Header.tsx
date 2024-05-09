'use client'
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSubNavOpen, setIsSubNavOpen] = useState(false);

    return (
        <header className="bg-black/opacity-80 text-white p-4 header">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <img className="lg:w-[40px] lg:h-[40px] md:w-[45px] md:h-[45px] w-[40px] h-[40px]" src="/images/SVAlogo.png" />
                </Link>


                {/* Navigation menu */}
                <div className="flex items-end justify-between">
                    <nav className={`lg:flex lg:items-center lg:space-x-4 ${isNavOpen ? 'block' : 'hidden'} mt-4 lg:mt-0 mr-20 `}>
                        <div className="relative"
                            onMouseEnter={() => setIsSubNavOpen(true)} // Show sub-navigation menu on hover
                            onMouseLeave={() => setIsSubNavOpen(false)} // Hide sub-navigation menu on mouse leave 
                        >
                            <div className="flex items-center hover:text-gray-300 cursor-pointer">
                                <div className="w-[86px] h-[23px] text-center text-white text-base font-normal font-['Montserrat']">Services</div>
                                <div className="ml-2">
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M0 0L5 5L10 0L0 0Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            {/* Sub-navigation menu */}
                            {isSubNavOpen && (
                                <div className="absolute bg-blue text-white mt-0 p-2 rounded-md shadow-md"
                                    style={{ minWidth: 'fit-content', width: '12rem' }}>
                                    <Link href="/about/team">
                                        <div className="cursor-pointer hover:text-gray-300 p-2">Trend Runner</div>
                                    </Link>
                                    <Link href="/about/company">
                                        <div className="cursor-pointer hover:text-gray-300v p-2">First Edge</div>
                                    </Link>
                                    <Link href="/about/values">
                                        <div className="cursor-pointer hover:text-gray-300 p-2">Values</div>
                                    </Link>
                                </div>
                            )}

                        </div>
                        <Link href="/contact">
                            <div className="w-[86px] h-[23px] text-center text-white text-base font-normal font-['Montserrat']">About Us</div>
                        </Link>
                        <Link href="/language">
                            <div className="flex items-center hover:text-gray-300 cursor-pointer">
                                <div className="w-5 h-5 relative mr-3">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Globe vector">
                                            <path id="Vector" d="M1 11C1 16.523 5.477 21 11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path id="Vector_2" d="M12 1.05005C12 1.05005 15 5.00005 15 11C15 17 12 20.9501 12 20.9501M10 20.9501C10 20.9501 7 17 7 11C7 5.00005 10 1.05005 10 1.05005M1.63 14.5H20.37M1.63 7.50005H20.37" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="text-center text-white text-base font-normal font-Montserrat">EN</div>
                            </div>

                        </Link>
                    </nav>
                    {/* Hamburger icon for mobile */}
                    <div className="flex">
                        <div className="pr-4 flex ">
                            <div className='flex'>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M9 18.8049V16.7327H16V2.22735H9V0.155151H16C16.55 0.155151 17.021 0.358227 17.413 0.764378C17.805 1.17053 18.0007 1.65819 18 2.22735V16.7327C18 17.3026 17.8043 17.7906 17.413 18.1967C17.0217 18.6029 16.5507 18.8056 16 18.8049H9ZM7 14.6605L5.625 13.1582L8.175 10.5161H0V8.44395H8.175L5.625 5.80189L7 4.29955L12 9.48005L7 14.6605Z" fill="#F8F8F8" />
                                </svg>
                                <div className="w-[130px] h-[23px] lg:block md:block sm:hidden hidden text-center text-white text-base font-normal font-['Montserrat']">Login/ SignUp</div>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-white focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
