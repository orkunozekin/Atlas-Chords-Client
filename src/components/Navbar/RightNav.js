import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

const Ul = styled.ul`

    list-style: none;
    display: flex;
    flex-flow: row nowrap;

li {
    padding: 18px 10px;
}

@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh; 
    width:300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    margin-top: -10px;

    li {
        color: #fff;
    }

    
}


`;

const RightNav = ({ open }) => {

    function handleLogOut() {
        TokenService.clearAuthToken()
    }
    if (TokenService.hasAuthToken()) {
        return (
            <Ul open={open}>
                <Link to="/submitNewChord"><li>Submit Chords</li></Link>
                <Link to='/'><li>Guitar Chords</li></Link>
                <Link to='/' onClick={handleLogOut}>Log Out</Link>
                <Link to='/gallery'><li>Gallery</li></Link>
            </Ul>
        )
    }
    return (
        <Ul open={open}>
            <Link to="/log-in"><li>Log In</li></Link>
            <Link to='/sign-up'><li>Sign Up</li></Link>
            <Link to='/submitNewChord'><li>Submit Chords</li></Link>
            <Link to='/'><li>Guitar Chords</li></Link>
        </Ul>
    )
}

export default RightNav;