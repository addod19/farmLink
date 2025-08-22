import { useState } from 'react';
import GettingStarted from './gettingStarted';

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="bg-light text-dark">
            <header className="container py-3">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand fw-bold text-success fs-3 font-nunito" href="#">MagiCult</a>
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
                        <ul className='navbar-nav ms-auto mb-2 mb-md-0 gap-md-4'>
                            <li className='nav-item font-nunito'>
                                <a className='nav-link text-decoration-none text-dark' href='#services'>Services</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link text-decoration-none text-dark' href='#about'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link text-decoration-none text-dark' href='#contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <button className="btn btn-success rounded-pill" onClick={handleShow}>Get Started</button> */}
            </header>
            <GettingStarted show={showModal} handleClose={handleClose} />
        </div>
        
    );
}

export default Header;