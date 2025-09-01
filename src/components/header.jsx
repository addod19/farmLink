import { useState } from 'react';
import GettingStarted from './gettingStarted';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/farmlink.png";
import { HamburgerButton } from "./hamburgerButton";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleNavItemClick = () => {
    setIsNavCollapsed(true);
  };

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

          <HamburgerButton
            open={!isNavCollapsed}
            onToggle={() => setIsNavCollapsed(!isNavCollapsed)}
            className="ms-auto d-md-none"
            label={isNavCollapsed ? "Open menu" : "Close menu"}
          />

          <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0 gap-md-4" style={{ fontSize: "14px" }}>
              <li className="nav-item font-nunito">
                <HashLink
                    smooth to="/#services"
                    className="nav-link text-decoration-none text-dark"
                    onClick={handleNavItemClick}
                >
                    Services
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                    smooth to="/#about"
                    className="nav-link text-decoration-none text-dark"
                    onClick={handleNavItemClick}
                >
                    About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                    smooth to="/#contact"
                    className="nav-link text-decoration-none text-dark"
                    onClick={handleNavItemClick}
                >
                    Contact
                </HashLink>
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
