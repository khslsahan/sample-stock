'use client'
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSubNavOpen, setIsSubNavOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <div className="text-xl font-bold cursor-pointer">Stock Wise Analytics</div>
                </Link>


                {/* Navigation menu */}
                <nav className={`lg:flex lg:items-center lg:space-x-4 ${isNavOpen ? 'block' : 'hidden'} mt-4 lg:mt-0 `}>
                    <Link href="/">
                        <div className="hover:text-gray-300 cursor-pointer lg:mr-4">Home</div>
                    </Link>
                    <div className="relative"
                        onMouseEnter={() => setIsSubNavOpen(true)} // Show sub-navigation menu on hover
                        onMouseLeave={() => setIsSubNavOpen(false)} // Hide sub-navigation menu on mouse leave 
                    >
                        <div className="flex items-center hover:text-gray-300 cursor-pointer">
                            Service
                            <div className="ml-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="3"
                                    className="w-4 h-4" // Reduced width and height of the SVG icon
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>
                        {/* Sub-navigation menu */}
                        {isSubNavOpen && (
                            <div className="absolute bg-gray-800 text-white mt-0 p-2 rounded-md shadow-md"
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
                        <div className="hover:text-gray-300 cursor-pointer">Contact</div>
                    </Link>
                </nav>
                {/* Hamburger icon for mobile */}
                <div className="flex">
                    <div className="pr-4 flex ">
                        <div className='flex'>
                            <p className="pr-2 lg:block md:block sm:hidden hidden">sign In</p>
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
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
        </header>
    );
};

export default Header;
