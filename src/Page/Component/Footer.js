import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div class="container-fluid mt-5 p-0">
                <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
                    <section className>
                        <div className="container-fluid text-center text-md-start pt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <ul className="footer-list">
                                        <li><Link to="/" className="link-tag"> Contact Us </Link></li>
                                        <li><Link to="/" className="link-tag"> About Us </Link></li>
                                        <li><Link to="/" className="link-tag"> Careers </Link></li>
                                        <li><Link to="/" className="link-tag"> Flipkart </Link></li>
                                        <li><Link to="/" className="link-tag"> Press </Link></li>
                                        <li><Link to="/" className="link-tag"> Flipkart Wholesale </Link></li>
                                        <li><Link to="/" className="link-tag"> Corporate Information </Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <ul className="footer-list">
                                        <li><Link to="/" className="link-tag"> Payments </Link></li>
                                        <li><Link to="/" className="link-tag"> Shipping </Link></li>
                                        <li><Link to="/" className="link-tag"> Cancellation & Return </Link></li>
                                        <li><Link to="/" className="link-tag"> FAQ </Link></li>
                                        <li><Link to="/" className="link-tag"> Report Infringement </Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <ul className="footer-list">
                                        <li><Link to="/" className="link-tag"> Return Policy </Link></li>
                                        <li><Link to="/" className="link-tag"> Terms Of Use </Link></li>
                                        <li><Link to="/" className="link-tag"> Security </Link></li>
                                        <li><Link to="/" className="link-tag"> Privacy </Link></li>
                                        <li><Link to="/" className="link-tag"> Sitemap </Link></li>
                                        <li><Link to="/" className="link-tag"> EPR Compliance </Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <ul className="footer-list">
                                        <li><Link to="/" className="link-tag"> Facebook </Link></li>
                                        <li><Link to="/" className="link-tag"> Twitter </Link></li>
                                        <li><Link to="/" className="link-tag"> You Tube</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <Link to="/" className="text-white" href="/">© 2007-2022 Flipkart.com</Link>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;
