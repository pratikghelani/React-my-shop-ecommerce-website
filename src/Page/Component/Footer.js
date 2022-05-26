import React from 'react';

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
                                        <li><a href="/" className="link-tag"> Contact Us </a></li>
                                        <li><a href="/" className="link-tag"> About Us </a></li>
                                        <li><a href="/" className="link-tag"> Careers </a></li>
                                        <li><a href="/" className="link-tag"> Flipkart </a></li>
                                        <li><a href="/" className="link-tag"> Press </a></li>
                                        <li><a href="/" className="link-tag"> Flipkart Wholesale </a></li>
                                        <li><a href="/" className="link-tag"> Corporate Information </a></li>
                                    </ul>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <ul className="footer-list">
                                        <li><a href="/" className="link-tag"> Payments </a></li>
                                        <li><a href="/" className="link-tag"> Shipping </a></li>
                                        <li><a href="/" className="link-tag"> Cancellation & Return </a></li>
                                        <li><a href="/" className="link-tag"> FAQ </a></li>
                                        <li><a href="/" className="link-tag"> Report Infringement </a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <ul className="footer-list">
                                        <li><a href="/" className="link-tag"> Return Policy </a></li>
                                        <li><a href="/" className="link-tag"> Terms Of Use </a></li>
                                        <li><a href="/" className="link-tag"> Security </a></li>
                                        <li><a href="/" className="link-tag"> Privacy </a></li>
                                        <li><a href="/" className="link-tag"> Sitemap </a></li>
                                        <li><a href="/" className="link-tag"> EPR Compliance </a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <ul className="footer-list">
                                        <li><a href="/" className="link-tag"> Facebook </a></li>
                                        <li><a href="/" className="link-tag"> Twitter </a></li>
                                        <li><a href="/" className="link-tag"> You Tube</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <a className="text-white" href="/">© 2007-2022 Flipkart.com</a>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;
