import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Navbar.css'
import TokenService from '../../services/token-service'

const Navbar = () => {
    const [show, setShow] = useState(false);

    const nav_class = `nav-links ${!show ? "hideMenu" : ""}`;

    function handleLogOut() {
        TokenService.clearAuthToken()
    }

    if (TokenService.hasAuthToken()) {
        return (
            <nav className="nav">
                <h2><a className="title" href="/">Atlas Chords</a></h2>
                <div className={nav_class}>
                    <a className="navlink" href="/submitNewChord">Submit Chords</a>
                    {/* <a className="navlink" href="/favorites">Favorites</a> */}
                    <a className="navlink" href="/">Guitar Chords</a>
                    <a className="navlink" href="/" onClick={handleLogOut}>Log Out</a>
                </div>
                <div className="icon">
                    <GiHamburgerMenu onClick={(e) => setShow(!show)} />
                </div>
            </nav>
        )
    };
    return (
        <nav className="nav">
            <h2><a className="title" href="/">Atlas Chords</a></h2>
            <div className={nav_class}>
                <a className="navlink" href="/log-in">Log In</a>
                <a className="navlink" href="/submitNewChord">Submit Chords</a>
                {/* <a className="navlink" href="/favorites">Favorites</a> */}
                <a className="navlink" href="/">Guitar Chords</a>
            </div>
            <div className="icon">
                <GiHamburgerMenu onClick={(e) => setShow(!show)} />
            </div>
        </nav>
    );
  

};

export default Navbar;