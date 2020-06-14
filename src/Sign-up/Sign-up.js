import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sign-up.css'

export default function SignUp() {
    return (
        <section className="sign-up-wrapper">
                <h3>Create an account</h3>
                <form className="sign-up-form">
                    
                    <label htmlFor="name">First Name</label>
                    <input id="name" type="text" placeholder="Bob" required />
                    
                    <label htmlFor="last-name">Last Name</label>
                    <input id="last-name" type="text" placeholder="Marley" required />


                    <label htmlFor="create-username">Username</label>
                    <input id="create-username" type="text" placeholder="Marley2" required />
                    
                    <label htmlFor="create-email">Email Address</label>
                    <input id="create-email" type="email" placeholder="bobmarley@gmail.com" required />

                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="****" required />

                 
                    <button type="submit">Sign up</button>
                    {/* Sign up will change Navbar's state's signedIn's value to true */}
                    <NavLink to="/">
                        <button type="button">Cancel</button>
                    </NavLink>
                </form>
            </section>
    )
}
