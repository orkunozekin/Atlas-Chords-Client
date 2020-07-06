import React from 'react'
import './Footer.css'
import { FaLinkedin } from 'react-icons/fa'


export default function Footer() {
    return (
        <footer id="footer">
            <a href="https://www.linkedin.com/in/orkun-ozekin/">
                <FaLinkedin/>
            </a>
            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com/OrkunOzekin"><i className="fab fa-twitter-square"></i></a>
        </footer>
    )
}

