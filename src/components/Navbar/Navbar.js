import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Navbar.css'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [signedIn, setSignedIn] = useState(false);


    const nav_class = `nav-links ${!show ? "hideMenu" : ""}`;

    if (!signedIn) {
        return (
            <nav className="nav">
                <h2><a className="title" href="/">Atlas Chords</a></h2>
                <div className={nav_class}>
                    {!signedIn ? <a className="navlink" href="/sign-in">Sign in</a> : "hello"} {/* username goes instead of hello from the context */}
                    <a className="navlink" href="/submitNewChord">Submit Chords</a>
                    <a className="navlink" href="/favorites">Favorites</a>
                    <a className="navlink" href="/">Guitar Chords Selector</a>
                </div>
                <div className="icon">
                    <GiHamburgerMenu onClick={(e) => setShow(!show)} />
                </div>
            </nav>
        )
    }
    return (
        <nav className="nav">
        <h2>Atlas Chords</h2>
        <div className={nav_class}>
            <a className="navlink" href="/sign-in">Signed in as User</a>
            <a className="navlink" href="/favorites">Favorites</a>
            <a className="navlink" href="/">Guitar Chords Selector</a>
        </div>
        <div className="icon">
            <GiHamburgerMenu onClick={(e) => setShow(!show)} />
        </div>
    </nav>
    )
  

}

export default Navbar;