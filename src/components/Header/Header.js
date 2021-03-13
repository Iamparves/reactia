import React from 'react';
import './Header.css';
import Logo from '../../img/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <img className="navbar__img" src={Logo} alt="Reactia" />
                </nav>
            </div>
        </header>
    );
};

export default Header;