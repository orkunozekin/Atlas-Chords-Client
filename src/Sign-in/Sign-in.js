import React from 'react';
import './Sign-in.css';
import { NavLink } from 'react-router-dom';

class SignIn extends React.Component {
    render() {
        return (
            <section className="sign-in-wrapper">
                
                <form className="sign-in-form">
                <h3 className="sign-in-header">Sign in</h3>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="user7" required />

                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="****" required />

                    <button className="sign-in-button" type="submit">Sign in</button>
                    <NavLink to="/">
                        <button className="cancel" type="button">Cancel</button>
                    </NavLink>
                    <a className="create-acc" href="/sign-up">Don't have an account yet?</a>
                </form>
            </section>
        )
    }
}



export default SignIn;