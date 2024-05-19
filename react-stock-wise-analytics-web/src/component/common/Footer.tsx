// components/Footer.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="footer-container container mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 d-flex link-colums">
                        <div className="col text-center">
                            <h2>Products</h2>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-white">Supercharts</a></li>
                                <li><a href="/" className="text-white">Pine Script™</a></li>
                                <li><a href="/" className="text-white">Stock Screener</a></li>
                                <li><a href="/" className="text-white">ETF Screener</a></li>
                                <li><a href="/" className="text-white">Forex Screener</a></li>
                            </ul>
                        </div>
                        <div className="col text-center link-colums">
                            <h2>Company</h2>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-white">About</a></li>
                                <li><a href="/" className="text-white">Features</a></li>
                                <li><a href="/" className="text-white">Pricing</a></li>
                                <li><a href="/" className="text-white">Social Network</a></li>
                                <li><a href="/" className="text-white">Wall of Love</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <div className="col text-center link-colums">
                            <h2>Community</h2>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-white">Supercharts</a></li>
                                <li><a href="/" className="text-white">Pine Script™</a></li>
                                <li><a href="/" className="text-white">Stock Screener</a></li>
                                <li><a href="/" className="text-white">ETF Screener</a></li>
                            </ul>
                        </div>
                        <div className="col text-center link-colums">
                            <h2>For business</h2>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-white">Forex Screener</a></li>
                                <li><a href="/" className="text-white">Refer a friend</a></li>
                                <li><a href="/" className="text-white">Ideas</a></li>
                                <li><a href="/" className="text-white">Scripts</a></li>
                                <li><a href="/" className="text-white">House rules</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="markets-copyright row justify-content-center align-items-center">
                    <div className="markets col-lg-7 col-md-12 mx-auto d-flex justify-content-between align-items-center">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <div className="marketers-img me-2"><a href="/"><img src="/images/marketers/app-desktop-badge-en.svg" alt="CSE" className="img-fluid" /></a></div>
                            <div className="marketers-img ms-2"><a href="/"><img src="/images/marketers/app-store-badge-en.svg" alt="CSE" className="img-fluid" /></a></div>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <div className="marketers-img me-2"><a href="/"><img src="/images/marketers/google-play-badge-en.svg" alt="CSE" className="img-fluid" /></a></div>
                            <div className="marketers-img ms-2"><a href="/"><img src="/images/marketers/trade-on-tradingview-badges-en.svg" alt="CSE" className="img-fluid" /></a></div>
                        </div>
                    </div>
                    <div className="copyright col-lg-5 col-md-12 text-lg-end text-center">
                        <div>
                            <p>
                                Select market data provided by <a href="/" className="text-primary">CSE Data Services</a>
                            </p>
                            <span className="text-primary pt-0"> &copy;2024 stockWiseAnalytics</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
