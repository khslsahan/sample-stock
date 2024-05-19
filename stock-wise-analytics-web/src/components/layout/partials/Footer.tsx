// components/Footer.js
 
const Footer = () => {
    return (
        <footer className="bottom-0 w-full bg-black text-white py-4">
            <div className="footer-container mx-auto flex justify-center  mb-5">
                <div className="w-1/2 lg:flex">
                    <div className="link-colums text-center lg:w-1/2 w-full">
                        <h2>Products</h2>
                        <ul>
                            <li><a href="#">Supercharts</a></li>
                            <li><a href="#">Pine Script™</a></li>
                            <li><a href="#">Stock Screener</a></li>
                            <li><a href="#">ETF Screener</a></li>
                            <li><a href="#">Forex Screener</a></li>
                        </ul>
                    </div>
                    <div className="link-colums text-center lg:w-1/2 w-full">
                        <h2>Company</h2>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Social Network</a></li>
                            <li><a href="#">Wall of Love</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/2 lg:flex">
                    <div className="link-colums text-center lg:w-1/2 w-full">
                        <h2>Community</h2>
                        <ul>
                            <li><a href="#">Supercharts</a></li>
                            <li><a href="#">Pine Script™</a></li>
                            <li><a href="#">Stock Screener</a></li>
                            <li><a href="#">ETF Screener</a></li>
                        </ul>
                    </div>
                    <div className="link-colums text-center lg:w-1/2 w-full">
                        <h2>For business</h2>
                        <ul>
                            <li><a href="#">Forex Screener</a></li>
                            <li><a href="#">Refer a friend</a></li>
                            <li><a href="#">Ideas</a></li>
                            <li><a href="#">Scripts</a></li>
                            <li><a href="#">House rules</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container  mx-auto flex justify-between items-center">
                <div className="markets-copyright w-full lg:flex lg:justify-end p-2">
                    <div className="markets lg:w-3/5 md:w-full  mx-auto lg:flex md:flex sm:flex justify-between items-center">
                        <div className="lg:w-1/2 md:w-1/2 sm:w-1/2 flex  justify-between items-center">
                            <div className="marketers-img w-1/2 sm:w-full" ><a href="" ><img src="/images/marketers/app-desktop-badge-en.svg" alt="CSE" className="object-cover" /></a></div>
                            <div className="marketers-img w-1/2 sm:w-full" ><a href="" ><img src="/images/marketers/app-store-badge-en.svg" alt="CSE" className="object-cover" /></a></div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 sm:w-1/2 flex justify-between items-center">
                            <div className="marketers-img w-1/2 sm:w-full" ><a href="" ><img src="/images/marketers/google-play-badge-en.svg" alt="CSE" className="object-cover" /></a></div>
                            <div className="marketers-img w-1/2 sm:w-full" ><a href="" ><img src="/images/marketers/trade-on-tradingview-badges-en.svg" alt="CSE" className="object-cover" /></a></div>
                        </div>
                    </div>
                    <div className="copyright lg:w-2/5 md:w-full lg:text-end text-center lg:pt-0 pt-4 justify-end ">
                        <div>
                            <p>
                                Select market data provided by <a href="">CSE Data Services</a>
                            </p>
                            <span className="text-blue-500"> &copy;2024 stockWiseAnalytics</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
