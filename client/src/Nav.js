import React, { useState } from 'react';
import './Nav.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

function Nav() {
    const navigate = useNavigate();
    const location = useLocation();
    const [dropdownActive, setDropdownActive] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navigateTo = (path) => {
        navigate(path);
        setDropdownActive('');
        setDrawerOpen(false);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const toggleDropdown = (dropdownName) => {
        setDropdownActive(prev => prev === dropdownName ? '' : dropdownName);
    };

    // Helper function to determine if "About Stanley" or "Library" should be active
    const isAboutActive = () => {
        const aboutPaths = ['/company-profile', '/quality', '/mission'];
        return aboutPaths.some(path => location.pathname.includes(path));
    };

    const isLibraryActive = () => {
        const libraryPaths = ['/catalouge', '/certificates'];
        return libraryPaths.some(path => location.pathname.includes(path));
    };
    

    return (
        <nav className="Navbar-jc">
            <div className="logo-box" onClick={() => navigateTo('/')}>
                <img src="./images/footer-logo.png" alt="logo" />
            </div>
            <div className="hamburger" onClick={toggleDrawer}>
                <i className="fa fa-bars"></i>
            </div>
            <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
                <div className="hamburger-x" onClick={toggleDrawer}>
                    <i className="fa fa-x"></i>
                </div>
                <ul className="nav-link-ul-mobile">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-li active' : 'nav-link-li'} onClick={toggleDrawer}>Home</NavLink></li>
                    <li className={`nav-link-li dropdown ${isAboutActive() ? 'active-dropdown' : ''}`}
                        onClick={() => toggleDropdown('about')}>
                        About Stanley <span className={`dropdown-icon ${isAboutActive() ? 'rotate-icon' : ''}`}><i className="fa-solid fa-angle-down"></i></span>
                        {(dropdownActive === 'about') && (
                            <ul className="dropdown-content">
                                <li><NavLink to="/company-profile" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleDrawer}>Company Profile</NavLink></li>
                                <li><NavLink to="/quality" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleDrawer}>Quality</NavLink></li>
                                <li><NavLink to="/mission" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleDrawer}>Mission</NavLink></li>
                            </ul>
                        )}
                    </li>
                    <li><NavLink to="/product-line" className={({ isActive }) => isActive ? 'nav-link-li active' : 'nav-link-li'} onClick={toggleDrawer}>Product Line</NavLink></li>
                    <li className={`nav-link-li dropdown ${isLibraryActive() ? 'active-dropdown' : ''}`}
                        onClick={() => toggleDropdown('library')}>
                        Library <span className={`dropdown-icon ${isLibraryActive() ? 'rotate-icon' : ''}`}><i className="fa-solid fa-angle-down"></i></span>
                        {(dropdownActive === 'library') && (
                            <ul className="dropdown-content">
                                <li><NavLink to="/catalouge" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleDrawer}>Catalogue</NavLink></li>
                                <li><NavLink to="/certificates" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleDrawer}>Certificates</NavLink></li>
                            </ul>
                        )}
                    </li>
                    <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? 'nav-link-li active' : 'nav-link-li'} onClick={toggleDrawer}>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="nav-link-box">
                <ul className="nav-link-ul">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-li active' : 'nav-link-li'}>Home</NavLink></li>
                    <li className={`nav-link-li dropdown ${isAboutActive() ? 'active-dropdown' : ''}`}
                        onMouseEnter={() => toggleDropdown('about')}
                        onMouseLeave={() => toggleDropdown('')}>
                        About Stanley <span className={`dropdown-icon ${isAboutActive() ? 'rotate-icon' : ''}`}><i className="fa-solid fa-angle-down"></i></span>
                        {(dropdownActive === 'about') && (
                            <ul className="dropdown-content">
                                <li><NavLink to="/company-profile" className={({ isActive }) => isActive ? 'active' : ''}>Company Profile</NavLink></li>
                                <li><NavLink to="/quality" className={({ isActive }) => isActive ? 'active' : ''}>Quality</NavLink></li>
                                <li><NavLink to="/mission" className={({ isActive }) => isActive ? 'active' : ''}>Mission</NavLink></li>
                            </ul>
                        )}
                    </li>
                    <li><NavLink to="/product-line" className={({ isActive }) => isActive ? 'nav-link-li active' : 'nav-link-li'}>Product Line</NavLink></li>
                    <li className={`nav-link-li dropdown ${isLibraryActive() ? 'active-dropdown' : ''}`}
                        onMouseEnter={() => toggleDropdown('library')}
                        onMouseLeave={() => toggleDropdown('')}>
                        Library <span className={`dropdown-icon ${isLibraryActive() ? 'rotate-icon' : ''}`}><i className="fa-solid fa-angle-down"></i></span>
                        {(dropdownActive === 'library') && (
                            <ul className="dropdown-content">
                                <li><NavLink to="/catalouge" className={({ isActive }) => isActive ? 'active' : ''}>Catalogue</NavLink></li>
                                <li><NavLink to="/certificates" className={({ isActive }) => isActive ? 'active' : ''}>Certificates</NavLink></li>
                            </ul>
                        )}
                    </li>
                    <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? 'nav-link-li active' : 'nav-link-li'}>Contact Us</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
