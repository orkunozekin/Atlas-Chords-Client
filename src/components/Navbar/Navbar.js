import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import { Navbar, Nav } from 'react-bootstrap'



const NavigationBar = () => {

    function handleLogOut() {
        TokenService.clearAuthToken()
    }

    return (
        <section className="navbar-wrapper">
            <Navbar fixed="top" expand="lg" className="navbar">
                <Navbar.Brand href="/user/home">Atlas Chords</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {TokenService.hasAuthToken() ?
                        <Nav className="mr-auto">
                            <Link to="/submitNewChord"><li>Submit Chords</li></Link>
                            <Link to='/'><li>Guitar Chords</li></Link>
                            <Link to='/' onClick={handleLogOut}>Log Out</Link>
                            <Link to='/gallery'><li>Gallery</li></Link>
                        </Nav>
                        :
                        <Link to="/log-in">Login</Link>
                    }
                </Navbar.Collapse>
            </Navbar>
        </section>
    )
}

export default NavigationBar;