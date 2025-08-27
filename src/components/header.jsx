import { useState } from 'react';
import GettingStarted from './gettingStarted';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/farmlink.png";

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    return (
        <div className="bg-light text-dark">
            <header className="container py-3">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link to="/" className="navbar-brand fw-bold text-success fs-3 font-nunito">
                        <img
                            src={logo}
                            alt="FarmLink Logo"
                            style={{ height: "50px" }}
                        />
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        aria-controls='navbarNav'
                        aria-expanded={isNavCollapsed}
                        aria-label='Toggle navigation'
                        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id='navbarNav'>
                        <ul className='navbar-nav ms-auto mb-2 mb-md-0 gap-md-4' style={{ fontSize: "14px" }}>
                            <li className='nav-item font-nunito'>
                                <HashLink smooth to="/#services" className='nav-link text-decoration-none text-dark'>Services</HashLink>
                            </li>
                            <li className='nav-item'>
                                <HashLink smooth to="/#about" className='nav-link text-decoration-none text-dark'>About</HashLink>
                            </li>
                            <li className='nav-item'>
                                <HashLink smooth to="/#contact" className='nav-link text-decoration-none text-dark'>Contact</HashLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <GettingStarted show={showModal} handleClose={handleClose} />
        </div>
        
    );
}

export default Header;