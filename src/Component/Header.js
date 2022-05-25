import React from 'react'

export default function Header() {
    return (
        <>
            <div className="container">
                {/* ============= COMPONENT ============== */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Brand</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav">
                                <li className="nav-item active"> <a className="nav-link" href="#">Home </a> </li>
                                <li className="nav-item"><a className="nav-link" href="#"> About </a></li>
                                <li className="nav-item"><a className="nav-link" href="#"> Services </a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Hover me</a>
                                    <ul className="dropdown-menu fade-up">
                                        <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                                        <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                                        <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
                                <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Dropdown right </a>
                                    <ul className="dropdown-menu dropdown-menu-end fade-down">
                                        <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                                        <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div> {/* navbar-collapse.// */}
                    </div> {/* container-fluid.// */}
                </nav>
                {/* ============= COMPONENT END// ============== */}
                <section className="section-content py-5">
                    <h6>Demo for Navbar dropdown with hover animation effect. <br /> Based on Bootstrap 5 CSS framework.</h6>
                    <p>For this demo page you should connect to the internet to receive files from CDN  like Bootstrap5 CSS, Bootstrap5 JS</p>
                    <p className="text-muted"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <a href="https://bootstrap-menu.com/hover-animation.html" className="btn btn-success"> « Back to tutorial or Download code</a>
                </section>
            </div>

        </>
    )
}
